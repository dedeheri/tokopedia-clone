"use client";

import React, { useState } from "react";

import { ArrowLeft, Search, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { usePathname, useRouter } from "next/navigation";
import { useFetchSearchQuery } from "@/redux/services/search.services";
import { Skeleton } from "../ui/skeleton";

const DialogSearchHeaderMobile = () => {
  const pathName = usePathname();

  const [open, setOpen] = useState(false);

  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<any>(null);
  const { data: search, isLoading } = useFetchSearchQuery(searchQuery);

  const handleSearchQuery = (term: string) => {
    router.push(`search?q=${term}`);
  };

  const handlOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`search?q=${searchQuery}`);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {pathName == "/" ? (
          <Button
            variant="ghost"
            className="border w-full justify-start rounded-lg flex  space-x-2 h-9  px-2 items-center"
          >
            <SearchIcon className="size-4 text-neutral-500" />
            <p className="text-sm text-neutral-500">Telusuri</p>
          </Button>
        ) : (
          <Button variant="ghost" className="p-0">
            <SearchIcon className="size-6 stroke-1" />
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="h-full min-w-full px-3 py-2 [&>button]:hidden">
        <div className="space-y-5">
          <div className="flex space-x-2">
            <Button
              onClick={() => setOpen(false)}
              variant="ghost"
              className="px-2"
            >
              <ArrowLeft className="size-6 text-neutral-700" />
            </Button>

            <form
              onSubmit={handlOnSubmit}
              className="h-9 flex items-center space-x-2 w-full"
            >
              <Search className="size-4 text-neutral-600" />
              <input
                autoFocus
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Telurusi"
                className="w-full outline-none"
              />
            </form>
          </div>

          <div className="w-full space-y-1">
            {isLoading ? (
              <div className="space-y-2 w-full">
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
                <Skeleton className="h-9 w-full rounded-lg" />
              </div>
            ) : (
              <div className="w-full space-y-1">
                {search?.data?.map((_: string, i: number) => (
                  <div
                    key={i}
                    onClick={() => handleSearchQuery(_)}
                    className="hover:bg-secondary  rounded-lg items-center cursor-pointer flex space-x-3 h-9 px-2"
                  >
                    <SearchIcon className="size-5 text-neutral-400 w-5" />
                    <p className="w-[27rem] md:w-[40rem] lg:w-full items-start truncate">
                      {_}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSearchHeaderMobile;
