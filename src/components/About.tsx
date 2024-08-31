import Image from "next/image";
import Button from "./Button";
import { blobImg } from "@/utils/assets";

export default function About() {
  return (
    <>
      <div className="flex flex-col w-auto h-auto">
        <div className="app-container">
          <div className="flex items-center justify-center flex-col gap-14 lg:flex-row lg:justify-around">
            <div className="flex flex-col items-start gap-7 lg:gap-9 max-w-none lg:max-w-lg w-full">
              <h1 className="font-bold text-3xl lg:text-4xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-base lg:text-lg xl:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <Button
                text="Read More"
                sx={
                  "text-base sm:tex-lg lg:px-14 lg:py-2.5 md:py-2 py-1.5 px-12 px-10"
                }
              />
            </div>
            <div className="flex items-center">
              <Image
                src={blobImg}
                alt="blob/image"
                priority
                decoding="async"
                className="w-auto h-[55vh] md:h-[65vh] lg:h-[75vh]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
