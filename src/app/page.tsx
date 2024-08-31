import About from "@/components/About";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { ProductProps } from "@/utils/interface";
import { p1, p2, p3, p4, p5, p6 } from "@/utils/assets";

const localImages = [p1, p2, p3, p4, p5, p6, p1, p2, p4, p5];

async function getData(): Promise<ProductProps[]> {
  try {
    const res = await fetch(
      `https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products`,
      {
        next: {
          revalidate: 3600,
        },
        method: "GET",
      }
    );
    const data = await res.json();

    const updatedData = data?.[0]?.map((product: ProductProps, index: number) => ({
      ...product,
      image: localImages[index % localImages.length],
    }));

    return updatedData;
  } catch (error) {
    console.log(error);
    throw new Error("Error during fetching data!");
  }
}

export default async function Home() {
  const products = await getData();
  return (
    <>
      <Hero />
      <About />
      <Products products={products} />
    </>
  )
}
