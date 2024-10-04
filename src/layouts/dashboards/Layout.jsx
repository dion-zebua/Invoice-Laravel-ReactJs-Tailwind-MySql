import React, { useState } from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import Footer from "./Footer";
import TitlePage from "./TitlePage";

export default function Layouts(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { children, title } = props;
  return (
    <>
      <div className="h-full text-sm">
        <Nav
          openSidebar={(e) => setSidebarActive((prev) => !prev)}
          sidebarActive={sidebarActive}
        />
        <div className="flex overflow-hidden bg-white pt-16 lg:pt-[3.3rem]">
          <Aside
            sidebarActive={sidebarActive}
            openSidebar={(e) => setSidebarActive((prev) => !prev)}
          />
          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <TitlePage title={title} />
            <main className="min-h-full p-5 grid grid-cols-12 gap-x-5 gap-y-7 [&>*:is(div,form)]:col-span-full [&>*:is(div,form)]:bg-white [&>*:is(div,form)]:shadow [&>*:is(div,form)]:p-5 [&>*:is(div,form)]:rounded-none first:[&>*:is(div,form)]:-mt-14">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
