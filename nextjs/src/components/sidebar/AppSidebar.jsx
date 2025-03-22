"use client";

import * as React from "react";

// import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
// import { NavUser } from "@/components/nav-user";
// import { TeamSwitcher } from "@/components/team-switcher";
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
import { MenuSidebar } from "./MenuSidebar";
import Logo from "../other/Logo";

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
        <MenuSidebar />
      </SidebarContent>
      <SidebarFooter>{/* <NavUser user={data.user} /> */}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
