"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { ChevronDown, ChevronRight } from "@deemlol/next-icons";
import { ChevronUp } from "lucide-react";

import Footer from "./Footer";
import Header from "./Header";
import fetch from "@/lib/fetch";
import SkelatonTable from "./SkelatonTable";
import DataNotFound from "./DataNotFound";
import Data from "./Data";
import { useSession } from "@/context/SessionContext";

export default function DataTable(props) {
  const { column, path, model, defaultParams, searchColumn } = props;
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [params, setParams] = useState(defaultParams);

  const session = useSession();

  useEffect(() => {
    setIsLoadingData(true);
    fetch
      .get(model + "/", { params: params })
      .then((res) => setData(res.data.data))
      .catch((err) => {
        setData(null);
        let newMessage = err.response.data.message ?? err.message;
        if (newMessage && typeof newMessage == "object") {
          const messageFlat = Object.values(newMessage).flat();
          setMessage(
            <ul className="">
              {messageFlat.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          );
        } else {
          setMessage(newMessage);
        }
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [params]);

  return (
    <div className="w-full">
      <Header
        isLoadingData={isLoadingData}
        params={params}
        setParams={setParams}
        searchColumn={searchColumn}
      />
      <div>
        <Table className="table-auto">
          <TableHeader className="bg-gray-100">
            <TableRow>
              {column.map((col, i) => {
                return (
                  (!col?.role || (col?.role && col?.role == session?.role)) && (
                    <TableHead
                      key={i}
                      className="[&>div]:flex [&>div]:gap-x-2 [&>div]:whitespace-nowrap pr-7">
                      {isLoadingData && (
                        <span className="font-semibold text-slate-800">
                          {col.header}
                        </span>
                      )}
                      {!isLoadingData && !col?.sortable && !col?.selector && (
                        <span className="font-semibold text-slate-800">
                          {col.header}
                        </span>
                      )}
                      {!isLoadingData && col?.sortable && (
                        <div
                          onClick={() =>
                            !isLoadingData && col?.sortable
                              ? setParams((prev) => ({
                                  ...prev,
                                  orderBy: col.key,
                                  orderDirection:
                                    prev.orderBy === col.key
                                      ? prev.orderDirection === "asc"
                                        ? "desc"
                                        : "asc"
                                      : "asc",
                                }))
                              : ""
                          }
                          key={i}
                          className={`hover:cursor-pointer hover:[&_svg]:!stroke-slate-700 hover:[&_svg]:!stroke-4 ${col?.className}`}>
                          <span className="font-semibold text-slate-800">
                            {col.header}
                          </span>
                          <div>
                            <ChevronUp
                              className={`top-0.5 relative ${
                                params?.orderBy == col?.key &&
                                params.orderDirection == "desc"
                                  ? "!stroke-slate-700 stroke-[4px]"
                                  : ""
                              }`}
                              size={10}
                            />
                            <ChevronDown
                              className={`bottom-0.5 relative ${
                                params?.orderBy == col?.key &&
                                params.orderDirection == "asc"
                                  ? "!stroke-slate-700 stroke-[4px]"
                                  : ""
                              }`}
                              size={10}
                            />
                          </div>
                        </div>
                      )}
                      {!isLoadingData && col?.selector && (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <div className="hover:cursor-pointer hover:[&_svg]:!stroke-slate-700 hover:[&_svg]:!stroke-4">
                              <span className="font-semibold text-slate-800">
                                {col.header}
                              </span>
                              <div className="flex items-center">
                                <ChevronRight
                                  size={10}
                                  className={
                                    params?.[col?.key]
                                      ? "!stroke-slate-700 !stroke-4"
                                      : ""
                                  }
                                />
                              </div>
                            </div>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>
                              Pilih {col.header}
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup>
                              {col?.selector &&
                                col?.selectorItem?.length > 0 &&
                                col?.selectorItem.map((item, i) => {
                                  return (
                                    <DropdownMenuCheckboxItem
                                      key={i}
                                      checked={item.key == params?.[col?.key]}
                                      onCheckedChange={() => {
                                        setParams((prev) => ({
                                          ...prev,
                                          [col?.key]: item.key,
                                        }));
                                      }}
                                      value={item.key}>
                                      {item?.label}
                                    </DropdownMenuCheckboxItem>
                                  );
                                })}
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      )}
                    </TableHead>
                  )
                );
              })}
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Buat Skeleton */}
            {(isLoadingData && (
              <SkelatonTable
                column={column}
                params={params}
              />
            )) ||
              // Data tersedia
              (data?.data && data?.data.length > 0 ? (
                <Data
                  data={data}
                  column={column}
                  setIsLoadingData={setIsLoadingData}
                  setParams={setParams}
                  model={model}
                  path={path}
                />
              ) : (
                // Data tidak tersedia
                <DataNotFound
                  column={column}
                  message={message}
                />
              ))}
          </TableBody>
        </Table>
      </div>
      <Footer
        params={params}
        setParams={setParams}
        data={data}
        path={path}
      />
    </div>
  );
}
