"use client";
import React, { useEffect, useState } from "react";
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
import { Skeleton } from "../ui/skeleton";

export default function DataTable(props) {
  const { data, message, column, path, model, isLoadingData } = props;
  const [newMessage, setNewMessage] = useState(message);

  useEffect(() => {
    if (message && typeof message == "object") {
      const messageFlat = Object.values(message).flat();
      setNewMessage(
        <>
          <ul className="">
            {messageFlat.map((msg, index) => (
              <li key={index}>{msg}</li>
            ))}
          </ul>
        </>
      );
    } else {
      setNewMessage(message || "Data Tidak Ditemukan!");
    }
  }, [message]);

  return (
    <div className="w-full">
      {data?.data && data?.data.length > 0 && (
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
      )}
      <div className="rounded-md border">
        <Table className="table-auto">
          <TableHeader>
            <TableRow>
              {column.map((col, i) => {
                return (
                  <TableHead
                    key={i}
                    className={
                      (col?.sortable || col?.selector) &&
                      `cursor-pointer ${col?.className}`
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
            {/* Buat Skeleton */}
            {(isLoadingData && (
              <TableRow>
                {column.map((col, i) => {
                  return (
                    <TableCell key={i}>
                      <Skeleton className="rounded-sm h-5 w-3/4 bg-slate-100 duration-1000" />
                    </TableCell>
                  );
                })}
              </TableRow>
            )) ||
              // Data tersedia
              (data?.data && data?.data.length > 0 ? (
                data?.data.map((item, index) => {
                  return (
                    <TableRow key={index}>
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
                              col.header == "Action" ? (
                                <Action
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
                })
              ) : (
                // Data tidak tersedia
                <TableRow>
                  <TableCell
                    colSpan={column.length}
                    className="h-24 text-center">
                    {newMessage}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
      {data?.data && data?.data.length > 0 && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {data?.from ?? 0} - {data?.to ?? 0} dari {data?.total ?? 0} {path}.
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
      )}
    </div>
  );
}
