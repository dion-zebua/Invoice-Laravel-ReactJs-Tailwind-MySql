import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  const { openSidebar, sidebarActive } = props;

  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={openSidebar}
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="lg:hidden mr-2 ring-1 ring-blue-200 text-blue-800  cursor-pointer p-2 bg-blue-50 hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-blue-500 rounded outline-none [&_svg]:w-6 [&_svg]:h-6">
              <svg
                id="toggleSidebarMobileHamburger"
                className={`${sidebarActive ? "hidden" : "block"}`}
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
                className={`${!sidebarActive ? "hidden" : "block"}`}
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
            <Link
              to="/"
              className="p-2 w-32 md:w-40 xl:w-44 md:ml-2">
              <img
                className="w-full"
                alt="Logo Invoice"
                src="/images/invoice.jpg"
              />
            </Link>
          </div>
          <div className="flex items-center group cursor-pointer">
            <div className="flex items-center mr-1 text-slate-600 group-hover:text-slate-800">
              <span className="font-normal">Dion Zebua</span>
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
                className="relative flex rounded-full bg-blue-600 hover:outline-none ring-2 hover:ring-2 hover:ring-slate-700"
                id="user-menu-button">
                <img
                  className="h-6 invert p-[3px] w-auto rounded-full"
                  src="/images/icons8-human-96.png"
                  alt="User"
                />
              </button>
              <div className="hidden group-hover:block top-full pt-5 right-1 lg:-right-1 absolute w-48">
                <div className="rounded-md bg-white py-1 border shadow [&_a]:block [&_a]:px-4 [&_a]:py-2 [&_a]:text-slate-600 hover:[&_a]:text-blue-600">
                  <Link
                    className={
                      location.pathname == "/profil" ? "!text-blue-600" : ""
                    }
                    to="/profil">
                    Profil
                  </Link>
                  <span className="h-[1px] bg-slate-100"></span>
                  <a href="#!">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
