import { getManyCategories } from "@app/client/data/catagory.data";
import { getManyProducts } from "../../../data/product.data";
import CategoryList from "@app/client/components/userComponents/categorList";
import ShopList from "@app/client/components/userComponents/shoplist";
const products = await getManyProducts();
const categories = await getManyCategories();
function Shop() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-64 xl:w-72 flex-shrink-0">
          <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
            <h3 className="text-lg w-full p-4 text-white uppercase bg-pink-950 font-semibold">
              Filters
            </h3>
            <div className="p-4 space-y-6">
              <div>
                <h4 className="text-base text-gray-800 mb-3 uppercase font-semibold">
                  Categories
                </h4>
                <CategoryList categories={categories} />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="text-base text-gray-800 mb-3 uppercase font-semibold">
                  Price Range
                </h4>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    name="min"
                    id="min"
                    className="w-full border border-gray-300 rounded-md focus:border-pink-950 focus:ring-2 focus:ring-pink-950 focus:ring-offset-0 px-3 py-2 text-sm text-gray-700"
                    placeholder="Min"
                  />
                  <span className="text-gray-500 font-medium">-</span>
                  <input
                    type="number"
                    name="max"
                    id="max"
                    className="w-full border border-gray-300 rounded-md focus:border-pink-950 focus:ring-2 focus:ring-pink-950 focus:ring-offset-0 px-3 py-2 text-sm text-gray-700"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Products Section */}
        <main className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
            Products
          </h1>
          <ShopList products={products} />
        </main>
      </div>
    </div>
  );
}
export default Shop;
