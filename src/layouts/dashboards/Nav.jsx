import React from "react";

export default function Nav() {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
              <svg
                id="toggleSidebarMobileHamburger"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                id="toggleSidebarMobileClose"
                className="w-6 h-6 hidden"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="https://dionzebua.com/umroh/dashboard"
              className="w-40 md:w-44 xl:w-52 md:ml-2">
              <img
                className="w-full"
                alt="Logo"
                src="https://dionzebua.com/umroh/img/logo-panjang.png"
              />
            </a>
          </div>
          <div className="flex items-center group">
            <div className="flex items-center mr-1 text-slate-600 group-hover:text-slate-800">
              <span className="text-sm font-normal">MECCA</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-3.5 mx-2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div className="relative">
              <button
                type="button"
                className="relative flex rounded-full bg-slate-800 focus:outline-none focus:ring-2 focus:ring-mine"
                id="user-menu-button">
                <img
                  className="h-7 w-auto rounded-full"
                  src="https://dionzebua.com/umroh/img/user.png"
                  alt="User"
                />
              </button>
              <div className="hidden group-hover:block top-full pt-5 right-1 lg:-right-1 absolute w-48">
                <div className="rounded-md bg-white py-1 shadow">
                  <a
                    href="https://dionzebua.com/umroh/dashboard/profil"
                    className="block px-4 py-2 text-slate-600 hover:text-mine">
                    Profil
                  </a>
                  <form
                    action="https://dionzebua.com/umroh/dashboard/cetak-bilyet-dp/7b559ba3-1834-347c-a2e1-d49c4391d7f6"
                    target="_blank"
                    method="GET">
                    <input
                      type="hidden"
                      name="_token"
                      value="BlBNLY4Iv7r6w1H455iX49bvuJ6uNqrv81fW6fRe"
                    />
                    <input
                      type="hidden"
                      name="_method"
                      value="GET"
                    />
                    <button
                      type="submit"
                      className="w-full text-left px-4 py-2 text-slate-600 hover:text-mine">
                      Bilyet DP
                    </button>
                  </form>
                  <span className="h-[1px] bg-slate-100"></span>
                  <form
                    action="https://dionzebua.com/umroh/dashboard/logout"
                    method="POST">
                    <input
                      type="hidden"
                      name="_token"
                      value="BlBNLY4Iv7r6w1H455iX49bvuJ6uNqrv81fW6fRe"
                    />
                    <input
                      type="hidden"
                      name="_method"
                      value="POST"
                    />
                    <button
                      type="submit"
                      className="w-full text-left px-4 py-2 text-slate-600 hover:text-mine">
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
