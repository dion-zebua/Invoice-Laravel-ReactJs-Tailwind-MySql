import React from "react";
import { Box, FileText, House, Users } from "@deemlol/next-icons";

export default function MenuItem({ session = {}, flatten }) {
  const menu = [
    {
      title: "Dashboard",
      url: "/dashboard",
      role: ["user", "admin"],
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

  if (flatten) {
    let flatMenu = [];

    menu.forEach((item) => {
      const { subMenu, ...rest } = item;
      flatMenu.push(rest);

      if (subMenu && Array.isArray(subMenu)) {
        subMenu.forEach((subItem) => {
          flatMenu.push(subItem);
        });
      }
    });

    return flatMenu;
  }

  return menu;
}
