import { ChevronDown, ChevronUp } from "@deemlol/next-icons";
import React from "react";

export default function Sortable(props) {
  const { isLoadingData, params, setParams, column, children } = props;

  return (
    <div
      onClick={() =>
        !isLoadingData &&
        setParams((prev) => ({
          ...prev,
          orderBy: column,
          orderDirection: prev.orderDirection === "asc" ? "desc" : "asc",
        }))
      }
      className={`${
        !isLoadingData &&
        "hover:cursor-pointer hover:[&_svg]:!stroke-slate-700 hover:[&_svg]:!stroke-4"
      } flex gap-x-2.5`}>
      <span className="font-semibold text-slate-800">{children}</span>
      <div className={isLoadingData ? "hidden" : ""}>
        <ChevronUp
          className={`top-0.5 relative ${
            params?.orderBy == column && params.orderDirection == "desc"
              ? "!stroke-slate-700 stroke-[4px]"
              : ""
          }`}
          size={10}
        />
        <ChevronDown
          className={`bottom-0.5 relative ${
            params?.orderBy == column && params.orderDirection == "asc"
              ? "!stroke-slate-700 stroke-[4px]"
              : ""
          }`}
          size={10}
        />
      </div>
    </div>
  );
}
