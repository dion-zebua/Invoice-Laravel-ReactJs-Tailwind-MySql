import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronLeft2,
  ChevronRight,
  ChevronRight2,
} from "@deemlol/next-icons";
import React from "react";

export default function Footer(props) {
  const { data, setParams } = props;

  return (
    <div className="flex flex-col items-center justify-center border-t py-5 space-y-3">
      <div className="space-y-3.5 text-sm text-center text-muted-foreground">
        <p>
          {data?.from ?? 0} - {data?.to ?? 0} dari {data?.total ?? 0} baris.
        </p>
        <p>
          Halaman {data?.current_page ?? 1} dari {data?.last_page ?? 1}.
        </p>
      </div>
      <div className="space-x-2">
        {/* First */}
        <Button
          onClick={() => setParams((prevData) => ({ ...prevData, page: 1 }))}
          disabled={!data?.current_page || data?.current_page == 1}
          variant=""
          size="sm">
          <ChevronLeft2 size={20} />
        </Button>

        {/* Prev */}
        <Button
          onClick={() =>
            setParams((prevData) => ({
              ...prevData,
              page: data?.current_page - 1,
            }))
          }
          disabled={!data?.prev_page_url}
          variant=""
          size="sm">
          <ChevronLeft size={20} />
        </Button>

        {/* Next */}
        <Button
          onClick={() =>
            setParams((prevData) => ({
              ...prevData,
              page: data?.current_page + 1,
            }))
          }
          disabled={!data?.next_page_url}
          variant=""
          size="sm">
          <ChevronRight size={20} />
        </Button>

        {/* Last */}
        <Button
          onClick={() =>
            setParams((prevData) => ({ ...prevData, page: data?.last_page }))
          }
          disabled={data?.current_page == data?.last_page}
          variant=""
          size="sm">
          <ChevronRight2 size={20} />
        </Button>
      </div>
    </div>
  );
}
