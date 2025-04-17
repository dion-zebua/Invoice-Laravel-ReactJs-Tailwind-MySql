import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import Action from "../Action";

export default function Data(props) {
  const { data, column, setIsLoadingData, setParams, model, path, id, action } =
    props;
  return data?.data.map((item, index) => {
    return (
      <TableRow
        key={index}
        className="even:bg-gray-50">
        {/* Tampilkan Kolom */}
        {column.map((col, i) => {
          return (
            <TableCell
              className="whitespace-normal max-w-36"
              key={i}>
              <div className="line-clamp-1">
                {/* Tampilkan Nomor */}
                {col?.key == "id" ? (
                  index + 1
                ) : // Tampilkan aksi
                col.header == true ? (
                  <Action
                    setIsLoadingData={setIsLoadingData}
                    setParams={setParams}
                    model={model}
                    path={path}
                    id={item.id}
                    action={col?.action}
                  />
                ) : // Tampilkan Kolom yang memiliki custom
                col.cell ? (
                  col.cell({ data: item[col.key] })
                ) : (
                  // Tampilkan default kolom
                  item[col.key] ?? "-"
                )}
              </div>
            </TableCell>
          );
        })}
      </TableRow>
    );
  });
}
