import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Header(props) {
  const { params, setParams, isLoadingData } = props;
  const baris = [5, 10, 20, 50, 100];

  const handleSearch = (e) => {
    e.preventDefault();
    setParams((prevData) => ({
      ...prevData,
      search: e.target[0].value,
      page: 1,
    }));
  };

  const handleChangePage = (e) => {
    setParams((prevData) => ({
      ...prevData,
      perPage: e,
      page: 1,
    }));
  };

  return (
    <div className="flex items-center justify-between pb-4 gap-5">
      <form>
        <Select
          disabled={isLoadingData}
          onValueChange={handleChangePage}>
          <SelectTrigger>
            <SelectValue
              defaultValue={params?.perPage}
              placeholder={params?.perPage}
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Baris</SelectLabel>
              {baris.map((row, i) => {
                return (
                  <SelectItem
                    key={i}
                    // selected={params?.perPage}
                    // disabled={params?.perPage == row}
                    value={`${row}`}>
                    {row}
                  </SelectItem>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </form>
      <form
        onSubmit={handleSearch}
        className="flex flex-nowrap items-center gap-3 max-w-sm w-full sm:w-80">
        <Input
          autoFocus
          placeholder="cari..."
          disabled={isLoadingData}
        />
        <Button
          disabled={isLoadingData}
          className="px-3"
          variant="outline">
          Cari
        </Button>
      </form>
    </div>
  );
}
