import { vg6 } from "@/utils/assets";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-12 mt-0 md:mt-28 lg:mt-52">
      <div className="absolute bottom-0 left-0 opacity-100 z-20">
        <Image
          src={vg6}
          alt="graphics/svg"
          priority
          decoding="async"
          className="w-[400px] xl:w-[500px] h-auto"
        />
      </div>
      <div className="app-container relative opacity-100 z-30">
        <div className="flex items-start md:items-center justify-start md:justify-between w-full gap-14 flex-col md:flex-row">
          <div className="grid items-center max-w-none md:max-w-xs w-full gap-4">
            <Link
              href={`/`}
              className="font-bold text-transparent bg-clip-text bg-gradient-linear md:text-white text-xl sm:text-2xl uppercase"
            >
              Chilled grape
            </Link>
            <p className="text-black md:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-14">
            <div className="grid items-start">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-linear">
                Company
              </h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Our Work
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="grid items-start">
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-linear">
                Products
              </h3>
              <ul>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    About
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Careers
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Our Work
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="#" className="hover:text-teal-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
