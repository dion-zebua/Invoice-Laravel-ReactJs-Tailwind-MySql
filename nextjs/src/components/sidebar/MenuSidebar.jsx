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
import { useSession } from "@/context/SessionContext";

const role = () => {
  const session = useSession();
  return session.role;
};

const menu = () => {
  return [
    {
      title: "Dashboard",
      url: "/dashboard",
      role: ["user", "admin"],
      isActive: true,
      icon: <House size={16} />,
    },
    {
      title: "Pengguna",
      url: role() == "admin" ? "/pengguna" : "#",
      role: ["admin"],
      icon: <Users size={16} />,
      subMenu: [
        {
          title: "Semua Pengguna",
          url: "/pengguna",
          role: ["admin"],
        },
        {
          title: "Tambah Pengguna",
          url: "/pengguna/tambah",
          role: ["admin"],
        },
      ],
    },
    {
      title: "Produk",
      url: role() == "admin" ? "/produk" : "#",
      role: ["user", "admin"],
      icon: <Box size={16} />,
      subMenu: [
        {
          title: "Semua Produk",
          url: "/produk",
          role: ["user"],
        },
        {
          title: "Tambah Produk",
          url: "/produk/tambah",
          role: ["user"],
        },
      ],
    },
    {
      title: "Invoice",
      url: role() == "admin" ? "/invoice" : "#",
      role: ["user", "admin"],
      icon: <FileText size={16} />,
      subMenu: [
        {
          title: "Semua Invoice",
          url: "/invoice",
          role: ["user"],
        },
        {
          title: "Tambah Invoice",
          url: "/invoice/tambah",
          role: ["user"],
        },
      ],
    },
  ];
};

export function MenuSidebar({ subMenu }) {
  return (
    <SidebarGroup>
      <SidebarMenu className="!gap-y-3">
        {menu()
          .filter((item) => item.role.includes(role()))
          .map((item) => (
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
              {item.subMenu?.length ? (
                <SidebarMenuSub>
                  {item.subMenu
                    .filter((item) => item.role.includes(role()))
                    .map((item) => (
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
