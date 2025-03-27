import { NextResponse } from 'next/server'
import { getSession } from './lib/session'

export async function middleware(request) {
    let cookie = request.cookies.get('session')

    const user = await getSession()

    if (!user && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const restrictedPaths = [
        '/reset-password',
        '/verifikasi-email',
        '/login',
    ];

    const pathname = request.nextUrl.pathname;

    if (user && restrictedPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    const data = await getSession()

    const response = NextResponse.next()

    return response
}