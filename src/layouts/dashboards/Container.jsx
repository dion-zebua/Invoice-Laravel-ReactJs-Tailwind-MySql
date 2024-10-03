import React from "react";

export default function Container(props) {
  const { title, children, className } = props;
  return (
    <div className={`${className} grid grid-cols-1 gap-x-5`}>
      <h2 className="opacity-90 mb-5 !col-span-full">{title ?? ""}</h2>
      {children}
    </div>
  );
}
