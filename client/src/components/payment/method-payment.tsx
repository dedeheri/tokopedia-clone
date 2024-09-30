"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronRight } from "lucide-react";

const paymentBank = [
  {
    logo: "https://images.tokopedia.net/img/payment/icons/bca.png",
    bank: "Bank BCA",
  },
  {
    logo: "https://images.tokopedia.net/img/payment/icons/bni.png",
    bank: "Bank BNI",
  },
  {
    logo: "https://images.tokopedia.net/img/payment/icons/bri.png",
    bank: "Bank BRI",
  },
];

const MethodPayment = () => {
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [selectedPaymentBank, setSelectedPaymentBank] = useState<any>(
    paymentBank[0]
  );

  return (
    <section className="p-5">
      <Dialog open={showDialog} onOpenChange={() => setShowDialog(!showDialog)}>
        <DialogTrigger className="w-full">
          <div
            onClick={() => setShowDialog(true)}
            className="flex justify-between items-center cursor-pointer hover:bg-secondary w-full rounded-md"
          >
            <div className="flex space-x-2 items-center">
              <img src={selectedPaymentBank?.logo} className="size-[40px]" />
              <p>{selectedPaymentBank?.bank}</p>
            </div>

            <ChevronRight className="size-6" />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="space-y-5">
            <DialogTitle className="font-bold text-2xl">
              Pilih pembayaran
            </DialogTitle>
            <DialogDescription className="space-y-2">
              {paymentBank.map((bank, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSelectedPaymentBank(bank), setShowDialog(false);
                  }}
                  className="flex space-x-2 items-center cursor-pointer hover:bg-secondary w-full rounded-md"
                >
                  <img src={bank.logo} className="size-[40px]" />
                  <p>{bank.bank}</p>
                </button>
              ))}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default MethodPayment;
