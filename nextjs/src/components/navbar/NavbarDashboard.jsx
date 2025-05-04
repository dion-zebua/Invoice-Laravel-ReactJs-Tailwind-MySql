"use client";
import React, { useState } from "react";
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
import Logout from "../other/Logout";
import { useSession } from "@/context/SessionContext";

export default function NavbarDashboard() {
  const session = useSession();

  return (
    <header className="flex min-h-16 max-h-16 items-center border-b bg-white">
      <div className="flex items-center justify-between px-4 w-full">
        <div className="flex items-center justify-between gap-2">
          <SidebarTrigger />
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
              <div className="hidden sm:[display:-webkit-box] group-hover:text-slate-800 max-w-[100px] line-clamp-1 text-sm ml-2 mr-1">
                {session?.name}
              </div>
              <ChevronDown
                size={13}
                className="group-hover:stroke-slate-800"
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 text-slate-600 !mr-4">
            <DropdownMenuGroup>
              <Link href="/dashboard/profil">
                <DropdownMenuItem className="cursor-pointer hover:!text-primary">
                  Profil
                </DropdownMenuItem>
              </Link>
              <Link href="/dashboard/reset-password">
                <DropdownMenuItem className="cursor-pointer hover:!text-primary">
                  Ubah Password
                </DropdownMenuItem>
              </Link>
              <Separator className="my-1" />

              {/* <DropdownMenuItem className="cursor-pointer hover:!text-primary p-0 pl-2 [&_button]:py-1.5 [&_button]:w-full [&_button]:text-left"> */}
              <div className="cursor-pointer hover:!text-primary p-0 pl-2 [&_button]:py-1.5 [&_button]:w-full [&_button]:text-left text-sm">
                <Logout />
              </div>
              {/* </DropdownMenuItem> */}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
