import React from "react";
import { Button } from "./ui/button";
import { LogOutIcon } from "lucide-react";
import { signOut } from "next-auth/react";

const UserToggle = ({ user }: any) => {
  return (
    <div className="relative group">
      <Button
        className="w-full group-hover:bg-neutral-100 p-0 px-5 py-5 flex items-center space-x-3"
        variant="ghost"
      >
        <img src={user?.image} className="size-[32px]  rounded-full" />
        <p>{user?.name}</p>
      </Button>

      <div className="h-0 w-[20rem] z-50 group-hover:translate-y-3 group-hover:h-[9rem] duration-300 top-9 right-0 rounded-xl absolute shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] bg-white">
        <div className="hidden group-hover:block">
          <div className="p-4 space-y-5">
            <div className="h-14 w-full shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] rounded-xl flex space-x-3 items-center px-4">
              <img src={user?.image} className="size-[33px] rounded-full" />
              <h1 className="font-bold">{user?.name}</h1>
            </div>

            <Button
              onClick={() => signOut()}
              variant="ghost"
              className="space-x-3 text-neutral-600"
            >
              <LogOutIcon className="size-5" />
              <span>Keluar</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserToggle;
