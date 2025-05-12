import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";

export default function SkeletonTable(props) {
  const { column, params } = props;
  return Array.from({ length: params?.perPage }, (_, i) => (
    <TableRow key={i}>
      {Array.from({ length: column }, (_, j) => (
        <TableCell key={j}>
          <Skeleton className="min-w-8 rounded-sm h-5 w-full bg-slate-100 duration-1000" />
        </TableCell>
      ))}
    </TableRow>
  ));
}
