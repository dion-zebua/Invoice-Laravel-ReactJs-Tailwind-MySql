"use client";

import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Box, FileText, House, Users } from "@deemlol/next-icons";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      isActive: true,

      icon: <House size={16} />,
    },
    {
      title: "Pengguna",
      url: "#",
      icon: <Users size={16} />,
      items: [
        {
          title: "Semua Pengguna",
          url: "/pengguna",
        },
        {
          title: "Tambah Pengguna",
          url: "/pengguna/tambah",
        },
      ],
    },
    {
      title: "Produk",
      url: "#",
      icon: <Box size={16} />,
      items: [
        {
          title: "Semua Produk",
          url: "/produk",
        },
        {
          title: "Tambah Produk",
          url: "/produk/tambah",
        },
      ],
    },
    {
      title: "Invoice",
      url: "#",
      icon: <FileText size={16} />,
      items: [
        {
          title: "Semua Invoice",
          url: "/invoice",
        },
        {
          title: "Tambah Invoice",
          url: "/invoice/tambah",
        },
      ],
    },
  ],
};

export function MenuSidebar({ items }) {
  return (
    <SidebarGroup>
      <SidebarMenu className="!gap-y-3">
        {data.navMain.map((item) => (
          <SidebarMenuItem key={item.title}>
            <SidebarMenuButton
              asChild
              isActive={item.isActive}>
              <a
                href={item.url}
                className="[&_svg]:opacity-85 [&_svg]:text-sidebar-foreground hover:[&_svg]:text-sidebar-accent-foreground [&_svg]:mr-1 data-[active=true]:[&_svg]:text-sidebar-accent-foreground">
                {item.icon}
                {item.title}
              </a>
            </SidebarMenuButton>
            {item.items?.length ? (
              <SidebarMenuSub>
                {item.items.map((item) => (
                  <SidebarMenuSubItem key={item.title}>
                    <SidebarMenuSubButton
                      asChild
                      isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            ) : null}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
