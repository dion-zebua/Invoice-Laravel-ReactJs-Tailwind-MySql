import { NextResponse } from 'next/server'
import { getSession } from './lib/session'

export async function middleware(request) {
    const user = await getSession()

    const pathname = request.nextUrl.pathname;

    if (!user && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const restrictedPaths = [
        '/reset-password',
        '/verifikasi-email',
        '/login',
    ];
    if (user && restrictedPaths.some(path => pathname == path)) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    const response = NextResponse.next()

    return response
}