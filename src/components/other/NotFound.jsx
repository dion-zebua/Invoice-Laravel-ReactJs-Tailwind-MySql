"use client";

import { usePathname, redirect } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  pathname.startsWith("/dashboard/") ? redirect("/dashboard/") : redirect("/");

  return null;
}
