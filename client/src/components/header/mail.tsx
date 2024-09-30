import React from "react";
import { Button } from "../ui/button";
import { MailIcon } from "lucide-react";

const text = [
  "Chat",
  "Diskusi",
  "Ulasan",
  "Pesan Bantuan",
  "Pesan Dikomplaing",
];

const Mail = () => {
  return (
    <div className="relative group">
      <Button className="px-2.5 group-hover:bg-neutral-100" variant="ghost">
        <MailIcon className="text-neutral-700" />
      </Button>

      <div className="h-0 w-[12rem] z-50 group-hover:translate-y-3 group-hover:h-[9rem] duration-300 top-9 right-0 rounded-xl absolute shadow-[0_1px_6px_0_rgba(0,0,0,0.12)] bg-white">
        <div className="hidden group-hover:block">
          <div className="flex flex-col space-y-1">
            {text.map((_, i) => (
              <Button
                key={i}
                variant="ghost"
                className="h-6 flex text-sm justify-start"
              >
                <p className="text-sm font-medium text-neutral-500">{_}</p>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
