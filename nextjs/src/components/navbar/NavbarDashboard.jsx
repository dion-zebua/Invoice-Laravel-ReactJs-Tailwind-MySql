import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import Link from "next/link";
import Logo from "../other/Logo";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "@deemlol/next-icons";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function NavbarDashboard() {
  return (
    <header className="flex min-h-16 max-h-16 items-center border-b">
      <div className="flex items-center justify-between px-4 w-full">
        <div className="flex items-center justify-between gap-2">
          <SidebarTrigger />
          {/* <Separator
              orientation="vertical"
              className="mr-2 h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb> */}
          <Link
            href="/dashboard"
            className="m-2">
            <Logo />
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center hover:cursor-pointer group">
              <Button
                className="p-0 rounded-full border-0"
                variant="outline">
                <Avatar>
                  <AvatarImage src="/image/user.webp" />
                </Avatar>
              </Button>
              <div className="group-hover:text-slate-800 max-w-[100px] line-clamp-1 text-sm ml-2 mr-1">
                Dion Zebua
              </div>
              <ChevronDown
                size={13}
                className="group-hover:stroke-slate-800"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 text-slate-600 !mr-4">
            <DropdownMenuGroup>
              <DropdownMenuItem className="cursor-pointer hover:!text-primary">
                <Link href="/dashboard/profil">Profil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:!text-primary">
                <Link href="/dashboard/reset-password">Ubah Password</Link>
              </DropdownMenuItem>
              <Separator className="my-1"/>
              <DropdownMenuItem className="cursor-pointer hover:!text-primary">Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
