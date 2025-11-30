"use client";
import { useCart } from "@app/client/data/state";
import { Button } from "@app/client/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@app/client/components/ui/table";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { reloadCart } from "@app/client/data/cartHandler";
function Cart() {
  const cartData = useCart((state) => state.cartProducts);
  const addAmount = useCart((state) => state.addProductAmount);
  const minusAmount = useCart((state) => state.minusProductAmount);
  const removefromCart = useCart((state) => state.removeFromCart);
  const [clicked, setClicked] = useState(false);
  const total = cartData
    .map((data) => data.price * data.quantity)
    .reduce((total, val) => total + val, 0);

  // function handleOperation (e, product) {

  //   if (e.target.name === '-'){
  //      minusAmount(product.id)
  //   }
  //   else {
  //     addAmount(product)
  //   }
  //   setClicked((prev) => !prev)

  // }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 pb-4 border-b border-gray-300">
        Shopping Cart
      </h1>
      
      {cartData.length === 0 ? (
        <div className="text-center py-12 lg:py-16">
          <p className="text-lg sm:text-xl text-gray-600 mb-4">
            Your cart is empty
          </p>
          <Link href="/shop">
            <Button className="bg-pink-950 hover:bg-pink-900 text-white px-6 py-2">
              Continue Shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-sm text-gray-600 mb-4">
              You have {cartData.length} {cartData.length === 1 ? 'item' : 'items'} in your cart
            </div>
            {cartData.map((product) => (
              <div
                key={product.id}
                className="flex flex-col sm:flex-row gap-4 bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200"
              >
                <Image
                  width={200}
                  height={200}
                  className="object-cover w-full sm:w-32 h-32 rounded-lg flex-shrink-0"
                  src={`/${product.image}`}
                  alt={product.name}
                />
                <div className="flex-1 flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <h5 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                      {product.name}
                    </h5>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <p className="text-lg font-semibold text-pink-950">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex items-center gap-3 border border-gray-300 rounded-lg px-3 py-2">
                      <button
                        onClick={() => minusAmount(product.id)}
                        className="text-gray-600 hover:text-gray-900 text-lg font-semibold w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        -
                      </button>
                      <p className="text-base font-semibold w-8 text-center">
                        {product.quantity}
                      </p>
                      <button
                        onClick={() => addAmount(product.id)}
                        className="text-gray-600 hover:text-gray-900 text-lg font-semibold w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removefromCart(product.id)}
                      className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded-md transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 sticky top-24">
              <div className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 pb-4 border-b border-gray-300">
                  Order Summary
                </h2>
                <div className="space-y-4 mb-6">
                  {cartData.map((data) => (
                    <div key={data.id} className="flex justify-between text-sm">
                      <span className="text-gray-600">{data.name} x{data.quantity}</span>
                      <span className="font-semibold text-gray-900">
                        ${(data.quantity * data.price).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-300 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-pink-950">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link href="./checkout" className="block">
                  <Button className="w-full bg-pink-950 hover:bg-pink-900 text-white py-6 text-base font-semibold">
                    Proceed To Checkout
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Cart;
