import React from "react";

export default function Container(props) {
  const { title, children, className } = props;
  return (
    <div className={className}>
      <h2 className="opacity-90 mb-3">{title ?? ""}</h2>
      {children}
    </div>
  );
}
