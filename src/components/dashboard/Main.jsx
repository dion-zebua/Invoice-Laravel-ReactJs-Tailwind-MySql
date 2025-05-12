import React from "react";
import Footer from "@/components/footer/Footer";
import NavbarDashboard from "@/components/navbar/NavbarDashboard";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

import {
  SidebarFooter,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DefaultBaner from "./DefaultBaner";

export default function Main(props) {
  const { children, page } = props;
  return (
    <SidebarProvider className="body-dashboard text-slate-700">
      <AppSidebar />
      <SidebarInset className="flex flex-col justify-between h-dvh">
        <div className="">
          <NavbarDashboard />
          <DefaultBaner page={page} />
          <div className="-mt-14 grid auto-rows-min gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 p-4">
            {children}
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
