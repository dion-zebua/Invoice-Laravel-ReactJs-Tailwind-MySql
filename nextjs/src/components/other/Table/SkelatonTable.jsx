import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export default function SkelatonTable(props) {
  const { column, params } = props;
  return Array.from({ length: params?.perPage }, (_, i) => (
    <TableRow key={i}>
      {column.map((col, ii) => {
        return (
          <TableCell key={ii}>
            <Skeleton className="rounded-sm h-5 w-3/4 bg-slate-100 duration-1000" />
          </TableCell>
        );
      })}
    </TableRow>
  ));
}
