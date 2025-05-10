import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { MenuLayout } from "./MenuLayout";
import Logo from "../other/Logo";
import { Button } from "../ui/button";
import helper from "@/lib/helper";
import { MessageCircle } from "@deemlol/next-icons";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}>
      <SidebarHeader className="md:pt-0">
        <SidebarMenu>
          <SidebarMenuItem className="mr-2">
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-2">
              <Link
                href="/dashboard"
                className="m-2 md:hidden block">
                <Logo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MenuLayout />
      </SidebarContent>
      <SidebarFooter className="px-3">
        <div className="mx-auto mb-10 w-full max-w-60 rounded-2xl bg-slate-100 border border-slate-200 p-5 text-center">
          <h3 className="text-base mb-2 font-semibold text-slate-700">
            #1 Support Terbaik
          </h3>
          <p className="text-sm mb-4 text-slate-500">
            Hubungi kami jika anda memiliki kendala pada platfrom ini.
          </p>
          <Link
            target="_blank"
            href={helper.whatsapp('Saya ada kendala pada platfrom invoices')}>
            <Button
              className="w-full lg:!px-5"
              variant={"default"}>
              <MessageCircle /> Chat
            </Button>
          </Link>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
