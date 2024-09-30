import React, { useState } from "react";
import Nav from "./Nav";
import Aside from "./Aside";
import Footer from "./Footer";

export default function Layouts(props) {
  const [sidebarActive, setSidebarActive] = useState(false);
  const { childred } = props;
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
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64 pt-5">
            <main className="min-h-full"></main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
