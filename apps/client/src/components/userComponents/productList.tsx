"use client";
import ProductCard from "./productCard";
import { useEffect } from "react";
import { useGlobalState } from "@app/client/data/globalState";
// import { useCart } from "@app/client/data/state";
// import { getcartList } from "@app/client/data/cartHandler";

const ProductsPage = ({ products }) => {
  const setProducts = useGlobalState((state) => state.setProducts);

  // const load = useCart((state) => state.loadCart)

  useEffect(() => {
    setProducts(products);
    // const handleLoad = async () => {
    //   const cart = await getcartList()
    //   load(cart)
    // }
    // handleLoad()

  });
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-pink-950 font-semibold mb-6 sm:mb-8 text-center lg:text-left">
        Latest Products
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex justify-center"
          >
            <ProductCard product={product} width={"w-full max-w-sm"} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductsPage;
