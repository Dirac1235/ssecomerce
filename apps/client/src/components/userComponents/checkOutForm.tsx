"use client";
import { makeOrder } from "@app/client/data/order";
import { useCart } from "@app/client/data/state";
import useMutation from "@app/client/hooks/use-mutation";
import Image from "next/image";
import { useRouter } from "next/navigation";

function CheckOutForm({ user }) {
  const clearCart = useCart((state) => state.clearCart)
  const { isMutating, startMutation } = useMutation();
  const cartData = useCart((state) => state.cartProducts);
  const route = useRouter()
  // console.log(cartData)
  const total = cartData
    .map((data) => data.price)
    .reduce((total, val) => total + val, 0);
  function handleClick() {
    const newData = cartData.map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));
    startMutation(async () => {
      console.log("The data", newData)
      const res = await makeOrder(newData);
      console.log({ res });
      if (res.error) {
        alert(JSON.stringify(res.error));
        return;
      }
      route.push(res.data.checkout_url);
      
    });
    clearCart()
  }
  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">Payment Details</h2>
        <p className="text-gray-600">
          Complete your order by providing your payment details.
        </p>
      </div>

      <div className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <Image width={20} height={20} src="/icons/mail.png" alt="Email" className="mr-3" />
            <input
              type="email"
              id="email"
              name="email"
              className="flex-1 bg-transparent text-sm outline-none text-gray-700"
              placeholder="example@gmail.com"
              value={user.email}
              disabled
            />
          </div>
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 bg-gray-50">
            <Image
              width={24}
              height={24}
              src="/icons/person.png"
              alt="Person"
              className="mr-3"
            />
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={user.firstName + " " + user.lastName}
              className="flex-1 bg-transparent text-sm outline-none text-gray-700"
              placeholder="Full name here"
              disabled={true}
            />
          </div>
        </div>

        {/* Billing Address */}
        <div>
          <label
            htmlFor="billing-address"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Billing Address
          </label>
          <div className="space-y-3">
            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-pink-950 focus-within:border-pink-950">
              <Image
                width={24}
                height={24}
                src="/icons/address.png"
                alt="Address"
                className="mr-3"
              />
              <input
                type="text"
                id="billing-address"
                name="billing-address"
                className="flex-1 text-sm outline-none text-gray-700"
                placeholder="Street Address"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <select
                name="billing-state"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-950 focus:border-pink-950"
              >
                <option value="">State</option>
              </select>
              <input
                type="text"
                name="billing-zip"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-pink-950 focus:border-pink-950"
                placeholder="ZIP Code"
              />
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="border-t border-gray-200 pt-6 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Subtotal</p>
            <p className="font-semibold text-gray-900">
              ${total.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Shipping</p>
            <p className="font-semibold text-gray-900">$0.00</p>
          </div>
          <div className="border-t border-gray-200 pt-3 flex items-center justify-between">
            <p className="text-base font-semibold text-gray-900">Total</p>
            <p className="text-2xl font-bold text-pink-950">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Place Order Button */}
        <button
          className="w-full rounded-md bg-pink-950 hover:bg-pink-900 px-6 py-3 font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-pink-950 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => handleClick()}
          disabled={isMutating}
        >
          {isMutating ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}
export default CheckOutForm;
