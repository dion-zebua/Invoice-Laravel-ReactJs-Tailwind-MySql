"use client";

import React, { useEffect, useState } from "react";
import { AlignJustify, X } from "@deemlol/next-icons";
import { Button } from "../ui/button";
import MenuLandingPage from "./MenuLandingPage";
import Logo from "../other/Logo";
import Link from "next/link";

export default function NavbarLandingPage(props) {
  const { page } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNav = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.add(
      isOpen ? "overflow-y-hidden" : "overflow-y-auto"
    );
    document.body.classList.remove(
      !isOpen ? "overflow-y-hidden" : "overflow-y-auto"
    );
  }, [isOpen]);

  return (
    <header className="flex justify-between items-center py-4 custom-container">
      <Link href="/">
        <Logo />
      </Link>
      <MenuLandingPage
        page={page}
        isOpen={isOpen}
      />
      <Button
        onClick={handleToggleNav}
        variant="outline"
        className="border !z-[100] lg:hidden custom-focus !px-2 [&_svg]:!w-5 [&_svg]:!h-5 [&_svg]:text-blue-600">
        {isOpen ? <X /> : <AlignJustify />}
      </Button>
    </header>
  );
}
