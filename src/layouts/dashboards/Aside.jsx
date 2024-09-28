import React from "react";

export default function Aside(props) {
  const { sidebarActive } = props;

  return (
    <>
      <aside
        id="sidebar"
        className={`${
          sidebarActive ? "" : "hidden"
        } fixed  z-20 h-full top-0 left-0 pt-16 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75`}
        aria-label="Sidebar">
        <div className="relative flex-1 flex flex-col min-h-full max-h-full border-r border-gray-200 bg-white pt-5">
          <div className="flex-1 flex flex-col pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1 pb-14">
              <ul className="space-y-2 pb-2 text-sm pt-5">
                <li className="!mb-5">
                  <a
                    href="https://dionzebua.com/umroh/dashboard"
                    className="text-slate-600 font-semibold rounded-lg flex items-center p-2 hover:text-slate-800 hover:bg-slate-100 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[19px] text-gray-500 group-hover:text-blue-600 stroke-current stroke-2"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"></path>
                    </svg>
                    <span className="ml-3">Dasbor</span>
                  </a>
                </li>
                <li className="!mb-5">
                  <a
                    href="#!"
                    className="text-slate-600 font-semibold rounded-lg flex items-center p-2 hover:text-slate-800 hover:bg-slate-100 group">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-[19px] text-gray-500 group-hover:text-blue-600 stroke-current stroke-2"
                      fill="none"
                      viewBox="0 0 24 24">
                      <path d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"></path>
                    </svg>
                    <span className="ml-3">User</span>
                  </a>
                  <ul className="mt-2 text-[13px]">
                    <li className="mb-2">
                      <a
                        href="https://dionzebua.com/umroh/dashboard/user"
                        className="border-l ml-9 text-slate-500 font-medium rounded hover:border-blue-600 flex items-center p-1.5 hover:text-slate-700 group">
                        <span className="ml-3">Semua User</span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="https://dionzebua.com/umroh/dashboard/user/create"
                        className="border-l ml-9 text-slate-500 font-medium rounded hover:border-blue-600 flex items-center p-1.5 hover:text-slate-700 group">
                        <span className="ml-3">Tambah User</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="hover:cursor-pointer bg-gray-900 opacity-50 hidden lg:!hidden fixed inset-0 z-10 lg:-z-10"
        id="sidebarBackdrop"></div>
    </>
  );
}
