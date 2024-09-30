import React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BadgePercent, ChevronLeft, ChevronRight } from "lucide-react";

const VoucherPayment = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full p-5">
        <div className="flex justify-between items-center px-3 border rounded-lg h-14">
          <div className="flex items-center space-x-2">
            <BadgePercent className="text-green-600" />
            <h1 className="font-bold text-neutral-600 text-sm">
              Makin hemat pakai promo
            </h1>
          </div>

          <ChevronRight />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default VoucherPayment;
