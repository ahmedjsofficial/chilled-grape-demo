import Link from "next/link";
import Button from "./Button";
import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <>
      <header className="flex items-center justify-center absolute top-9 left-0 right-0 opacity-100 z-30">
        <nav className="flex items-center justify-between app-container">
          <Link
            href={`/`}
            className="font-bold text-white text-xl sm:text-2xl md:text-3xl uppercase"
          >
            Chilled grape
          </Link>
          <ul className="hidden lg:flex items-center gap-16">
            <div className="flex items-center gap-7">
              <li className="grid items-center">
                <Link href={`/`} className="font-semibold">
                  Home
                </Link>
              </li>
              <li className="grid items-center">
                <Link href={`#about`} className="font-semibold">
                  About
                </Link>
              </li>
              <li className="grid items-center">
                <Link href={`#blog`} className="font-semibold">
                  Blog
                </Link>
              </li>
              <li className="grid items-center">
                <Link href={`/pricing`} className="font-semibold">
                  Pricing
                </Link>
              </li>
            </div>
            <li className="grid items-center">
              <Button text="Login" />
            </li>
          </ul>
          <ul className="flex lg:hidden items-center">
            <li className="grid items-center">
              <Button icon={<Bars3Icon className="w-7 h-7 stroke-[2]" />} sx="p-2" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
