"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { LoaderCircle } from "lucide-react";

interface IStateForm {
  email: string;
  password: string;
  loading: boolean;
  message: string;
}

const Signin = () => {
  const [state, setState] = useState<IStateForm>({
    email: "",
    password: "",
    loading: false,
    message: "",
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (events: React.FormEvent<HTMLFormElement>) => {
    events.preventDefault();
    const data = await signIn("credentials", {
      email: state?.email,
      password: state?.password,
      redirect: false,
    });

    setState({ ...state, message: data?.error ?? "" });
  };

  const onSubmitGoogle = async () => {
    await signIn("google", { redirect: false });
  };

  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-lg border px-4 flex items-center border-green-600  hover:bg-neutral-100  bg-white h-8">
          <h1 className="font-bold text-sm text-green-500">Masuk</h1>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[370px]">
        <div className="mt-10 space-y-10 px-3">
          <div className="flex justify-between items-center">
            <DialogTitle>
              <span className="text-3xl font-bold">Masuk</span>
            </DialogTitle>
            <DialogDescription>
              <Link href={"/register"}>
                <span className="text-green-600 font-medium">Daftar</span>
              </Link>
            </DialogDescription>
          </div>

          <form onSubmit={onSubmit} className="space-y-5">
            {state?.message && (
              <div className="bg-red-50 border border-red-500 h-8 rounded-lg flex items-center px-3">
                <span>{state?.message}</span>
              </div>
            )}
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="email"
                className="text-neutral-600 font-medium text-sm"
              >
                Nomor HP atau Email
              </Label>
              <Input
                name="email"
                onChange={onChange}
                type="email"
                id="email"
                placeholder="Email"
                className="focus-visible:ring-green-500"
              />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label
                htmlFor="password"
                className="text-neutral-600 font-medium text-sm"
              >
                Kata sandi
              </Label>
              <Input
                name="password"
                onChange={onChange}
                type="password"
                id="password"
                placeholder="Kata sandi"
                className="focus-visible:ring-green-500"
              />
            </div>

            <p className="text-green-600 text-sm text-end">Butuh bantuan?</p>

            <Button
              disabled={state.loading}
              variant="ghost"
              className="w-full bg-green-600 hover:bg-green-700  h-10 rounded-lg "
            >
              {state.loading ? (
                <LoaderCircle className="text-white animate-spin" />
              ) : (
                <span className="text-white">Selanjutnya</span>
              )}
            </Button>

            <div className="flex items-center justify-center space-x-4">
              <Separator className="w-16" />
              <p className="text-sm text-neutral-400 whitespace-nowrap ">
                atau masuk dengan
              </p>
              <Separator className="w-16" />
            </div>

            <div className="space-y-3">
              <Button
                type="button"
                variant="ghost"
                disabled
                className="w-full h-10 rounded-lg border"
              >
                <span className="text-neutral-800 font-bold text-md">
                  Verifikasi Instan
                </span>
              </Button>

              <Button
                onClick={onSubmitGoogle}
                type="button"
                variant="ghost"
                className="w-full h-10 rounded-lg border"
              >
                <span className="font-bold text-md">Google</span>
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Signin;
