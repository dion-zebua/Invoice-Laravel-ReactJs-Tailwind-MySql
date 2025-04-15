"use client";
import React from "react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { ChevronDown, ChevronRight } from "@deemlol/next-icons";
import { ChevronUp } from "lucide-react";

import Action from "./Action";

export default function DataTable(props) {
  const { data, message, column, path, model } = props;

  let newMessage = null;
  if (message && typeof message == "object") {
    const messageFlat = Object.values(message).flat();
    newMessage = (
      <>
        <ul className="">
          {messageFlat.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </>
    );
  } else {
    newMessage = message || "Data Tidak Ditemukan!";
  }

  return (
    <div className="w-full">
      <div className="flex flex-wrap items-center py-4 gap-5">
        <Input
          placeholder=""
          className="max-w-sm"
        />

        {/* KOLOM */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="ml-auto">
              Kolom
              <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {column.map((col, i) => {
              return (
                <DropdownMenuCheckboxItem
                  key={i}
                  checked
                  className="capitalize">
                  {col.header}
                </DropdownMenuCheckboxItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {column.map((col, i) => {
                return (
                  <TableHead
                    key={i}
                    className={
                      (col?.sortable || col?.selector) && "cursor-pointer"
                    }>
                    <div className="flex gap-x-2 whitespace-nowrap">
                      {col.header}
                      {col?.sortable && (
                        <div>
                          <ChevronUp
                            className="top-0.5 relative"
                            size={10}
                          />
                          <ChevronDown
                            className="bottom-0.5 relative"
                            size={10}
                          />
                        </div>
                      )}
                      {col?.selector && (
                        <div className="flex items-center">
                          <ChevronRight size={10} />
                        </div>
                      )}
                    </div>
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>

          <TableBody>
            {data?.data && data?.data.length > 0 ? (
              data?.data.map((item, index) => {
                return (
                  <TableRow key={index}>
                    {column.map((col, i) => {
                      return (
                        <TableCell key={i}>
                          {col?.key == "id" ? (
                            index + 1
                          ) : col.header == "Action" ? (
                            <Action
                              model={model}
                              path={path}
                              id={item.id}
                              action={col?.action}
                            />
                          ) : col.cell ? (
                            col.cell({ data: item[col.key] })
                          ) : (
                            item[col.key] ?? "-"
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell
                  colSpan={column.length}
                  className="h-24 text-center">
                  {newMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          1 of 5 row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm">
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
