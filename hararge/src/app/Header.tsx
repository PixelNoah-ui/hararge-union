import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-stone-800">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Logo"
            className="rounded-full"
            width={36}
            height={36}
          />
          <h1 className="text-lg font-semibold text-white tracking-tight">
            Hararge Union
          </h1>
        </Link>

        <div>
          <Link href="/signup">
            <Button className="rounded-full cursor-pointer px-6 font-medium">
              Register
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
