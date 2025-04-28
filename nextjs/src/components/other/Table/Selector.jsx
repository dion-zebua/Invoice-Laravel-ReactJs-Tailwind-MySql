import React from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "@deemlol/next-icons";

export default function Selector(props) {
  const { isLoadingData, params, setParams, column, item, children } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className={`${
            !isLoadingData &&
            "hover:cursor-pointer hover:[&_svg]:!stroke-slate-700 hover:[&_svg]:!stroke-4"
          } flex gap-x-2.5`}>
          <span className="font-semibold text-slate-800">{children}</span>
          <div className="flex items-center">
            <ChevronRight
              size={10}
              className={params?.[column] ? "!stroke-slate-700 !stroke-4" : ""}
            />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Pilih</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup>
          {item?.length > 0 &&
            item.map((row, i) => {
              return (
                <DropdownMenuCheckboxItem
                  key={i}
                  checked={row.key == params?.[column]}
                  onCheckedChange={() => {
                    setParams((prev) => ({
                      ...prev,
                      [column]: row.key,
                      page: 1,
                    }));
                  }}
                  value={row.key}>
                  {row?.label}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
