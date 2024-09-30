import Link from "next/link";
import Signin from "./signin";
import { Button } from "./ui/button";

const SectionAuthHeader = () => {
  return (
    <div className="flex space-x-3">
      <Signin />

      <Link href={"/register"}>
        <Button className="rounded-lg hover:bg-green-500 bg-green-600 h-8">
          <h1 className="font-bold text-sm ">Daftar</h1>
        </Button>
      </Link>
    </div>
  );
};

export default SectionAuthHeader;
