"use client";

import React, { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { SearchIcon, XIcon } from "lucide-react";
import { useFetchSearchQuery } from "@/redux/services/search.services";
import { useRouter, useSearchParams } from "next/navigation";
import { Skeleton } from "../ui/skeleton";

const Search = () => {
  const router = useRouter();

  const params = useSearchParams();
  const query = params.get("q");

  const [searchQuery, setSearchQuery] = useState<string>(query ?? "");
  const [recommendSearch, setRecommendSearch] = useState<boolean>(false);

  const { data: search, isLoading } = useFetchSearchQuery(searchQuery);

  const handleSearchQuery = (term: string) => {
    router.push(`search?q=${term}`);
  };

  const handlOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`search?q=${searchQuery}`);
  };

  return (
    <div className="relative group  duration-300 w-full h-[38px] border rounded-md flex items-center  focus-within:border-green-500">
      <button className="w-full" onClick={() => setRecommendSearch(true)}>
        <form
          onSubmit={handlOnSubmit}
          className="flex space-x-3 items-center px-3"
        >
          <SearchIcon className="size-5 text-neutral-400" />
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full outline-none placeholder:text-neutral-500 placeholder:text-md"
            placeholder="Cari di Tokopedia"
          />
        </form>
      </button>

      {/* recommend */}

      {recommendSearch && (
        <div className="space-y-3 bg-white shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-lg w-full absolute z-50 opacity-100 top-11 p-5">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              onClick={() => setRecommendSearch(false)}
              className="size-7 p-0"
            >
              <XIcon className="size-5" />
            </Button>
          </div>

          <div className="w-full space-y-1">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
              </div>
            ) : (
              search?.data?.map((_: string, i: number) => (
                <Button
                  variant="ghost"
                  key={i}
                  onClick={() => handleSearchQuery(_)}
                  className="w-full flex justify-start space-x-3 h-9"
                >
                  <SearchIcon className="size-5 text-neutral-400" />
                  <p className="truncate"> {_}</p>
                </Button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
