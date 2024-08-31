import { vg1, vg2, vg3, vg4, vg5 } from "@/utils/assets";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <main className="relative h-screen flex flex-col items-start justify-center">
        <div className="absolute top-0 left-0 opacity-100 z-20">
          <Image
            src={vg1}
            alt="graphics/svg"
            priority
            decoding="async"
            className="w-72 lg:w-80 xl:w-96 h-auto"
          />
        </div>
        <div className="absolute right-0 opacity-100 z-20">
          <Image
            src={vg2}
            alt="graphics/svg"
            priority
            decoding="async"
            className="w-56 md:w-72 lg:w-80 xl:w-96 h-auto"
          />
        </div>
        <div className="absolute top-2/4 left-0 opacity-100 z-20">
          <Image
            src={vg3}
            alt="graphics/svg"
            priority
            decoding="async"
            className="w-44 lg:w-48 xl:w-52 h-auto"
          />
        </div>
        <div className="app-container opacity-100 z-30 relative">
          <div className="absolute -top-32 lg:-top-36 xl:-top-40 2xl:-top-44 w-full flex items-center justify-start md:justify-center opacity-100 z-20">
            <Image
              src={vg4}
              alt="graphics/svg"
              width={350}
              height={250}
              priority
              decoding="async"
              className="w-72 lg:w-80 xl:w-96 h-auto"
            />
          </div>
          <div className="absolute -bottom-64 2xl:-bottom-40 right-0 md:right-1/4 2xl:right-36 flex items-center justify-end opacity-100 z-20">
            <Image
              src={vg5}
              alt="graphics/svg"
              width={400}
              height={350}
              priority
              decoding="async"
              className="w-80 xl:w-96 h-auto"
            />
          </div>
          <div className="flex flex-col items-start gap-9 lg:ml-0 xl:ml-[20%]">
            <div className="grid items-center gap-7">
              <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold uppercase">
                Lorem ipsum
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold uppercase">
                dolor sit amet.
              </h1>
            </div>
            <Button
              text="Read More"
              sx={
                "text-base sm:tex-lg md:text-xl lg:text-2xl px-12 lg:py-2.5 md:py-2 py-1.5 lg:px-14 px-10"
              }
            />
          </div>
        </div>
      </main>
    </>
  );
}
