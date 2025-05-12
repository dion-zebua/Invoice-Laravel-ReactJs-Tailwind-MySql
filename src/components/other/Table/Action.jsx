import React from "react";

export default function Action({ children }) {
  return (
    <div className="flex gap-x-2 [&_button,&_a]:rounded-sm [&_button,&_a]:!p-[3px] [&_button,&_a]:h-auto [&_button,&_a]:border-2 [&_button,&_a]:text-red-50 [&_svg]:!w-3.5 [&_svg]:!h-3.5">
      {children}
    </div>
  );
}
