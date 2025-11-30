"use client";

import { useCart } from "../../data/state";
import StarRating from "./starRating";
import { Button } from "../ui/button";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { addToWishList, getWishList } from "@app/client/data/wishHandler";
// import { addToCartList, reloadCart } from "@app/client/data/cartHandler";

function ProductCard({ product, width }) {
  // const addToWishList = useCart((state) => state.addToWishList);
  const addWishList = async (product) => await addToWishList(product);
  // const addCart = async (product) => await addToCartList(product);
  const addToCart = useCart((state) => state.addToCart);
  const removefromCart = useCart((state) => state.removeFromCart);
  const cartData = useCart((state) => state.cartProducts);
  const increaseWLength = useCart((state) => state.increaseLength);
  const [clicked, setClicked] = useState(false);

  function setCart(product) {
    addToCart(product);
    // addCart(product);
    setClicked((prev) => !prev);
  }
  const [color, setColor] = useState(false);
  useEffect(() => {
    const handleColor = async () => {
      const data = await getWishList();
      if (data.find((data) => data.id === product.id)) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    handleColor();
  }, []);
  function setAddToWish() {
    setColor((prev) => !prev);
    increaseWLength();
    addWishList(product);
  }
  // useEffect(() => {
  //   const reload = async() => {
  //     console.log("I'm called")
  //     await reloadCart(cartData)
  //   }
  //   reload()
  // },[clicked])
  return (
    <div
      className={`group ${width} flex flex-col overflow-hidden bg-[#fffbf5] hover:bg-gray-50 shadow-md rounded-lg transition-all duration-300 hover:shadow-lg`}
    >
      <a
        className="relative flex h-48 sm:h-56 overflow-hidden bg-gray-100"
        href={`/shop/${product.id}`}
      >
        <img
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={product.image}
          alt={product.name}
        />
      </a>
      <div className="flex flex-col flex-grow p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <a href={`/shop/${product.id}`} className="flex-1 min-w-0">
            <h5 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900 line-clamp-2 hover:text-pink-950 transition-colors">
              {product.name}
            </h5>
          </a>
          <Button
            className="bg-transparent hover:bg-gray-100 rounded-full p-2 h-auto w-auto flex-shrink-0"
            onClick={() => setAddToWish()}
            aria-label="Add to wishlist"
          >
            <FaRegHeart
              color={color ? "red" : "black"}
              size={18}
              fill={color ? "red" : "none"}
            />
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-slate-900">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 line-through">
            ${(product.price * 1.2).toFixed(2)}
          </span>
        </div>
        <div className="flex-shrink-0">
          <StarRating keys={product.id} />
        </div>
        <div className="mt-auto pt-2">
          {!cartData.find((data) => data.id === product.id) ? (
            <Button
              onClick={() => setCart(product)}
              className="w-full rounded-md bg-pink-950 px-4 py-2.5 text-sm font-medium text-white hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-pink-950 focus:ring-offset-2 transition-colors"
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              onClick={() => removefromCart(product.id)}
              className="w-full rounded-md bg-gray-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors"
            >
              Remove from Cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
