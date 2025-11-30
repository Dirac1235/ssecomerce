"use client";
import { useCart } from "@app/client/data/state";
import { BsCartPlus } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@app/client/components/ui/button";
import {
  addToWishList,
  getWishList,
  removeFromWishList,
} from "@app/client/data/wishHandler";

function WishList() {
  // const wishListData = useCart((state) => state.wishListProducts);
  const [wishListData, setWishListData] = useState([]);
  useEffect(() => {
    const fetchWishListData = async () => {
      try {
        const data = await getWishList();
        console.log("Fetched wish list:", data);
        setWishListData(data);
      } catch (error) {
        console.error("Error fetching wish list data:", error);
      }
    };

    fetchWishListData();
  }, []);

  const [color, setColor] = useState(false);
  // const removeFromWishList = useCart((state) => state.removeFromWishList);
  const removeWishList = () => removeFromWishList();
  const total = wishListData.length;
  const addToCart = useCart((state) => state.addToCart);

  function setCart(product) {
    setColor((prev) => !prev);
    addToCart(product);
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 pb-4 border-b border-gray-300">
        Wishlist
      </h1>
      
      {total === 0 ? (
        <div className="text-center py-12 lg:py-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            You have no items in your wishlist
          </p>
          <Link href="/shop">
            <Button className="bg-pink-950 hover:bg-pink-900 text-white px-6 py-2">
              Start Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="text-sm text-gray-600 mb-6">
            You have {total} {total === 1 ? 'item' : 'items'} in your wishlist
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {wishListData.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    fill
                    src={`/${product.image}`}
                    alt={product.name}
                    className="object-cover"
                  />
                </div>
                <div className="p-4 space-y-3">
                  <h5 className="text-lg font-semibold text-slate-900 line-clamp-2">
                    {product.name}
                  </h5>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-xl font-bold text-pink-950">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="flex gap-2 pt-2">
                    <Button
                      onClick={() => setCart(product)}
                      className="flex-1 bg-pink-950 hover:bg-pink-900 text-white text-sm py-2"
                    >
                      <BsCartPlus className="inline mr-2" size={18} />
                      Add to Cart
                    </Button>
                    <Button
                      onClick={() => removeWishList(product.id)}
                      variant="outline"
                      className="px-3 py-2 hover:bg-red-50 hover:text-red-600 hover:border-red-600"
                      aria-label="Remove from wishlist"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export default WishList;
