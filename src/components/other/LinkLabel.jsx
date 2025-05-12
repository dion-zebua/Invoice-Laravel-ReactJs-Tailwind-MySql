import Link from "next/link";
import React from "react";

export default function LinkLabel(props) {
  const { href, text } = props;
  return (
    <Link
      href={href}
      className="text-sm ml-auto opacity-80 underline-offset hover:underline">
      {text}
    </Link>
  );
}
