import { ReactNode } from "react";

type DataProps = {
  text?: string;
  sx?: string;
  icon?: ReactNode;
};

export default function Button({ text, sx, icon }: DataProps) {
  return (
    <button
      type="button"
      className={`${
        sx ? sx : "lg:px-12 px-10 md:py-2 py-1.5 text-base"
      } text-white font-medium bg-gradient-linear rounded-full`}
    >
      {icon ? icon : text}
    </button>
  );
}
