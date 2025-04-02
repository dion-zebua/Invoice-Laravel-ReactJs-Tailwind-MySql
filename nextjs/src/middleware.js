import { NextResponse } from 'next/server'
import { getSession } from './lib/session'
import MenuItem from './components/sidebar/MenuItem';

export async function middleware(request) {
    const user = await getSession()

    const pathname = request.nextUrl.pathname;


    if (user) {
        let menu = MenuItem(user, true)
        // console.log(menu);

        // console.log(menu.find(item => item.subMenu?.some(subItem => subItem.url === "/dashboard/pengguna/tambah")));

        // const menuActive = menu.find(item =>
        //     item.url === "/dashboard/pengguna/tambah" ||
        //     item.subMenu?.some(subItem => subItem.url === "/dashboard/pengguna/tambah")
        // );

        // if (menuActive && menuActive?.role?.includes("user")) {
        //     return NextResponse.redirect(new URL('/dashboard', request.url));
        // }
    }


    if (!user && pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    const restrictedPaths = [
        '/reset-password',
        '/verifikasi-email',
        '/login',
    ];
    if (user && restrictedPaths.some(path => pathname.startsWith(path))) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    const response = NextResponse.next()

    return response
}