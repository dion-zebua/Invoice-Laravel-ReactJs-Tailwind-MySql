"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronDown, ChevronRight } from "@deemlol/next-icons";
import { ChevronUp } from "lucide-react";

import Action from "../Action";
import Footer from "./Footer";
import Header from "./Header";
import fetch from "@/lib/fetch";
import SkelatonTable from "./SkelatonTable";
import DataNotFound from "./DataNotFound";
import Data from "./Data";

export default function DataTable(props) {
  const { column, path, model, defaultParams } = props;
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [params, setParams] = useState(defaultParams);

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
      />
      <div>
        <Table className="table-auto">
          <TableHeader className="bg-gray-100">
            <TableRow>
              {column.map((col, i) => {
                return (
                  <TableHead
                    key={i}
                    className="[&>div]:flex [&>div]:gap-x-2 [&>div]:whitespace-nowrap">
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
                      className={`${
                        (col?.sortable || col?.selector) && !isLoadingData
                          ? "[&_svg]:stroke-slate-500 hover:[&_svg]:stroke-slate-900 cursor-pointer"
                          : ""
                      } ${col?.className}`}>
                      <span className="font-semibold text-slate-800">
                        {col.header}
                      </span>
                      {!isLoadingData && col?.sortable && (
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
                      )}
                      {col?.selector && (
                        <div className="flex items-center">
                          <ChevronRight
                            className={`${
                              params?.[col?.key]
                                ? "!stroke-slate-700 stroke-[4px]"
                                : ""
                            }`}
                            size={10}
                          />
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
