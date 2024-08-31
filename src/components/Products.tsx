import { ProductProps } from "@/utils/interface";
import Product from "./Product";

export default async function Products({
  products,
}: {
  products: ProductProps[];
}) {

  return (
    <div className="flex flex-col">
      <div className="app-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-10 md:gap-14 lg:gap-18 xl:gap-24 mt-52">
          {products.map((product, i) => (
            <Product key={i} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
