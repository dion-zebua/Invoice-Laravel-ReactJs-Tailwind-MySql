import React, { useState } from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import Footer from "./Footer";

export default function Layouts(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { childred } = props;
  return (
    <>
      <div className="">
        <Nav openSidebar={(e) => setSidebarActive((prev) => !prev)} />
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
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
