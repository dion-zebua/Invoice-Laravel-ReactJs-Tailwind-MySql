"use client";
import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function Box(props) {
  const { className, loadingBox, children, title } = props;

  return (
    <div className={`${className ?? ""} bg-white min-h-40 border-[1px] p-4`}>
      {loadingBox ? (
        <div className="flex flex-col items-start gap-y-5 min-h-[inherit] h-full">
          <Skeleton className="rounded-none h-7 w-3/5 bg-slate-100 duration-1000"></Skeleton>
          <Skeleton className="rounded-none min-h-[inherit] h-full w-full bg-slate-100 duration-1000"></Skeleton>
        </div>
      ) : (
        <div className="">
          <h2 className="subtitle mb-5">{title}</h2>
          {children}
        </div>
      )}
    </div>
  );
}
