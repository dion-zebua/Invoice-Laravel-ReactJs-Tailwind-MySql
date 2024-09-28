import React, { useState } from "react";
import Nav from "./Nav";
import Aside from "./Aside";

export default function Layouts(props) {
  const { sidebarActive, setSidebarActive } = useState(false);
  const { childred } = props;

  

  return (
    <>
      <div className="">
        <Nav />
        <div className="flex overflow-hidden bg-white pt-16 lg:pt-[3.3rem]">
          <Aside sidebarActive={sidebarActive} />
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <main>
              <div className="pt-6 px-4 w-full grid grid-cols-12 gap-4 [&>*]:col-span-12 [&>*]:md:col-span-6 [&>*]:bg-white [&>*]:shadow [&>*]:rounded-lg [&>*]:p-4 [&>*]:sm:p-6 [&>*]:xl:p-8">
                <div className="!col-span-full bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Riwayat Transaksi
                      </h3>
                      <span className="text-base font-normal text-gray-500">
                        Riwayat transaksi terbaru
                      </span>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href="https://dionzebua.com/umroh/dashboard/transaksi"
                        className="text-sm font-medium text-mine hover:bg-gray-100 rounded-lg p-2">
                        Lihat Semua
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col mt-8">
                    <div className="overflow-x-auto rounded-lg">
                      <div className="align-middle inline-block min-w-full">
                        <div className="shadow overflow-hidden sm:rounded-lg">
                          {/* Transaction table or content goes here */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <footer className="bg-white flex items-center justify-between shadow rounded-lg p-4 m-5 text-sm">
              <p className="text-gray-500">
                Kembali ke halaman{" "}
                <a
                  className="underline"
                  href="https://dionzebua.com/umroh">
                  HQ Tour Travel
                </a>
              </p>
              <a
                href="mailto:info@mantapumroh.co.id"
                className="border-l-2 ps-3 text-gray-500 hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
                </svg>
              </a>
            </footer>
            <p className="text-center text-sm text-gray-500 my-10 px-4">
              <span className="block text-sm text-gray-500 text-center mb-4">
                © 2024{" "}
                <a
                  href="https://dionzebua.com/umroh"
                  className="hover:underline">
                  HQ Tour Travel
                </a>
                . All Rights Reserved.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
