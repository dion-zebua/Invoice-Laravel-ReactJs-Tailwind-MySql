import React from "react";

export default function Container(props) {
  const { title, children, className, onSubmit } = props;
  return (
    <>
      <form
        className={`${className} grid grid-cols-1 gap-x-5`}
        onSubmit={onSubmit}>
        <h2 className={`opacity-90 mb-5 !col-span-full ${title ?? "hidden"}`}>
          {title ?? ""}
        </h2>
        {children}
      </form>
    </>
  );
}
