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
import Link from "next/link";

export function MenuSidebar() {
  const session = useSession();

  const menu = [
    {
      title: "Dashboard",
      url: "/dashboard",
      role: ["user", "admin"],
      isActive: true,
      icon: <House size={16} />,
    },
    {
      title: "Pengguna",
      url: "#",
      role: ["admin"],
      icon: <Users size={16} />,
      subMenu: [
        {
          title: "Semua Pengguna",
          url: "/dashboard/pengguna",
          role: ["admin"],
        },
        {
          title: "Tambah Pengguna",
          url: "/dashboard/pengguna/tambah",
          role: ["admin"],
        },
      ],
    },
    {
      title: "Produk",
      url: session?.role == "admin" ? "/produk" : "#",
      role: ["user", "admin"],
      icon: <Box size={16} />,
      subMenu: [
        {
          title: "Semua Produk",
          url: "/dashboard/produk",
          role: ["user"],
        },
        {
          title: "Tambah Produk",
          url: "/dashboard/produk/tambah",
          role: ["user"],
        },
      ],
    },
    {
      title: "Invoice",
      url: session?.role == "admin" ? "/invoice" : "#",
      role: ["user", "admin"],
      icon: <FileText size={16} />,
      subMenu: [
        {
          title: "Semua Invoice",
          url: "/dashboard/invoice",
          role: ["user"],
        },
        {
          title: "Tambah Invoice",
          url: "/dashboard/invoice/tambah",
          role: ["user"],
        },
      ],
    },
  ];

  return (
    <SidebarGroup>
      <SidebarMenu className="!gap-y-3">
        {menu
          .filter((item) => item.role.includes(session?.role))
          .map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.isActive}>
                <Link
                  href={item.url}
                  className="[&_svg]:opacity-85 [&_svg]:text-sidebar-foreground hover:[&_svg]:text-sidebar-accent-foreground [&_svg]:mr-1 data-[active=true]:[&_svg]:text-sidebar-accent-foreground">
                  {item.icon}
                  {item.title}
                </Link>
              </SidebarMenuButton>
              {item.subMenu?.length ? (
                <SidebarMenuSub>
                  {item.subMenu
                    .filter((item) => item.role.includes(session?.role))
                    .map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.isActive}>
                          <Link href={item.url}>{item.title}</Link>
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
