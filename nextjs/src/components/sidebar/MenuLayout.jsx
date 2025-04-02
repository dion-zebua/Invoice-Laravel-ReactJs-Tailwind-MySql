"use client";

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
import { useSession } from "@/context/SessionContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, FileText, House, Users } from "@deemlol/next-icons";
import MenuItem from "./MenuItem";

export function MenuLayout() {
  const session = useSession();

  const path = usePathname();

  const menu = MenuItem(session ?? {});

  return (
    <SidebarGroup>
      <SidebarMenu className="!gap-y-3">
        {menu
          .filter((item) => item.role.includes(session?.role))
          .map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                isActive={item.url == path}>
                {item.url === "#" ? (
                  <a
                    href="#"
                    className="[&_svg]:opacity-85 [&_svg]:text-sidebar-foreground hover:[&_svg]:text-sidebar-accent-foreground [&_svg]:mr-1 data-[active=true]:[&_svg]:text-sidebar-accent-foreground">
                    {item.icon}
                    {item.title}
                  </a>
                ) : (
                  <Link
                    href={item.url}
                    className="[&_svg]:opacity-85 [&_svg]:text-sidebar-foreground hover:[&_svg]:text-sidebar-accent-foreground [&_svg]:mr-1 data-[active=true]:[&_svg]:text-sidebar-accent-foreground">
                    {item.icon}
                    {item.title}
                  </Link>
                )}
              </SidebarMenuButton>
              {item.subMenu?.length ? (
                <SidebarMenuSub>
                  {item.subMenu
                    .filter((item) => item.role.includes(session?.role))
                    .map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={item.url == path}>
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
