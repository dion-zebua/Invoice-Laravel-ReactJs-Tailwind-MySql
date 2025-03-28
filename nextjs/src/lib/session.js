"use server"
import 'server-only'
import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function encrypt(payload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('720m')
        .sign(encodedKey)
}

export async function decrypt(session) {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload
    } catch (error) {
        console.log('Failed to verify session')
    }
}

export async function login(data) {
    const encryptedSessionData = await encrypt(data)
    const cookie = await cookies()
    cookie.set('session', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 12, // 12 hours
        path: '/',
    })
}

export async function logout() {
    const cookie = await cookies()
    cookie.delete('session')
}


export async function getSession() {
    const cookie = await cookies()
    const session = cookie.get('session')?.value

    if (!session) return null

    const user = await decrypt(session)

    const now = Math.floor(Date.now() / 1000)
    if (user?.exp < now) return null

    return user
}