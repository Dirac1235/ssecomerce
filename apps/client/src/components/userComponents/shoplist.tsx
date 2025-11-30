"use client"
import { useFilter } from "@app/client/data/filter";
import ProductCard from "./productCard";

function ShopList({ products }) {
  const filterByCategory = useFilter((state) => state.filterByCategory);

  const filteredData = products.filter((item) =>
    !filterByCategory.includes(item.categoryId)
  );
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
      {filteredData.length > 0 ? (
        filteredData.map((product) => (
          <li
            key={product.id}
            className="flex justify-center"
          >
            <ProductCard product={product} width={"w-full max-w-sm"} />
          </li>
        ))
      ) : (
        <li className="col-span-full text-center py-12">
          <p className="text-gray-500 text-lg">No products found matching your filters.</p>
        </li>
      )}
    </ul>
  );
}
export default ShopList;
