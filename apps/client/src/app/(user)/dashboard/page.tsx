import ProductsPage from "../../../components/userComponents/productList";
import { getManyProducts } from "../../../data/product.data";
import Carousel from "../../../components/userComponents/DemoSlider";
import Image from "next/image";

const products = await getManyProducts();
console.log(products)
export default function Page() {
  return (
    <main className="w-full">
      <Carousel data={products} />
      
      {/* Features Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-slate-300 rounded-lg px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 hover:shadow-md transition-shadow bg-white">
            <Image
              width={48}
              height={48}
              src="/icons/delivery-van.svg"
              alt="Free Shipping"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-semibold capitalize text-base sm:text-lg text-gray-900">Free Shipping</h4>
              <p className="text-gray-600 text-sm mt-1">Order over $200</p>
            </div>
          </div>
          <div className="border border-slate-300 rounded-lg px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 hover:shadow-md transition-shadow bg-white">
            <Image
              width={48}
              height={48}
              src="/icons/money-back.svg"
              alt="Money Returns"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-semibold capitalize text-base sm:text-lg text-gray-900">Money Returns</h4>
              <p className="text-gray-600 text-sm mt-1">30 days money returns</p>
            </div>
          </div>
          <div className="border border-slate-300 rounded-lg px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 hover:shadow-md transition-shadow bg-white sm:col-span-2 lg:col-span-1">
            <Image
              width={48}
              height={48}
              src="/icons/service-hours.svg"
              alt="24/7 Support"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain flex-shrink-0"
            />
            <div className="text-center sm:text-left">
              <h4 className="font-semibold capitalize text-base sm:text-lg text-gray-900">24/7 Support</h4>
              <p className="text-gray-600 text-sm mt-1">Customer support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-pink-950 uppercase mb-6 sm:mb-8 text-center lg:text-left">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/furniture.jpg"
              alt="Furniture"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Furniture
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/vintage.webp"
              alt="Shoes"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Shoes
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/men.jpg"
              alt="Clothes"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Clothes
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/phone.jpg"
              alt="Phones"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Phones
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/acessories.jpg"
              alt="Accessories"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Accessories
            </a>
          </div>
          <div className="relative rounded-lg overflow-hidden group aspect-[4/3]">
            <Image
              width={1000}
              height={1000}
              src="/equipment.jpg"
              alt="Equipment"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <a
              href="/shop"
              className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-lg sm:text-xl text-white font-semibold group-hover:bg-opacity-60 transition-all duration-300"
            >
              Equipment
            </a>
          </div>
        </div>
      </div>

      <ProductsPage products={products} />
    </main>
  );
}
