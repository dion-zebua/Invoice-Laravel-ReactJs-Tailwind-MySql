import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LogIn } from "@deemlol/next-icons";

const menu = [
  ["/", "Beranda"],
  ["/tentang", "Tentang"],
  ["/kebijakan", "Kebijakan"],
];

export default function MenuLandingPage(props) {
  const { isOpen, page } = props;

  return (
    <>
      <div
        className="w-full"
        id="nav-mobile">
        <div
          className={`lg:static lg:hidden fixed bg-slate-950/90 inset-0 transition-all z-1 ${
            isOpen ? "" : "hidden"
          }`}></div>
        <div
          className={`z-[99] lg:bg-inherit lg:max-w-full lg:w-full lg:!p-0 lg:h-auto lg:static lg:flex lg:items-center lg:justify-between bg-white w-[calc(100%-50px)] max-w-[360px] px-6 py-10 h-dvh fixed top-0 bottom-0 ${
            isOpen ? "!right-[0px]" : "!right-[-360px]"
          }`}>
          <ul className="lg:flex lg:gap-x-12 lg:w-[calc(100%-144px)] lg:justify-center">
            {menu.map((item, i) => (
              <li key={i}>
                <Link
                  className={`mb-5 lg:mb-0 block text-slate-600 hover:text-primary ${
                    page == item[1] ? "!text-primary" : ""
                  }`}
                  href={item[0]}>
                  {item[1]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="lg:mt-0 lg:border-t-0 lg:pt-0 mt-7 border-t pt-7 border-slate-300">
            <Link href="/login">
              <Button className="w-full lg:!px-5">
                <LogIn /> Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
