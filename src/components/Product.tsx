'use client'

import { ProductProps } from "@/utils/interface";
import Image from "next/image";

type ProductComponentProps = {
  product: ProductProps;
};

export default function Product({ product }: ProductComponentProps) {
  return (
    <div className="bg-white shadow-lg rounded-[30px]">
      <div className="flex items-center">
        <Image
          src={product.image}
          alt={product.product_name}
          priority
          decoding="async"
          width={400}
          height={400}
          className="w-full h-[35vh] object-cover rounded-[30px] shadow-lg"
        />
      </div>
      <div className="px-5 py-7">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold uppercase">
          {product.product_name}
        </h2>
        <p className="text-gray-700 text-xl font-bold">
          £{product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
