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

    const restrictedAdminPaths = [
        '/dashboard/produk/',
        '/dashboard/invoice/',
    ]

    const restrictedUserPaths = [
        '/dashboard/pengguna',
    ]

    if (user) {

        const isRestrictedPath = restrictedPaths.some(path => pathname.startsWith(path));
        const isRestrictedAdminPath = user.role === 'admin' && restrictedAdminPaths.some(path => pathname.startsWith(path));
        const isRestrictedUserPath = user.role === 'user' && restrictedUserPaths.some(path => pathname.startsWith(path));

        if (isRestrictedPath || isRestrictedAdminPath || isRestrictedUserPath) {
            return NextResponse.redirect(new URL('/dashboard', request.url));
        }
    }


    const response = NextResponse.next()

    return response
}