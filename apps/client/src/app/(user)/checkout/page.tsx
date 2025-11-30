import CheckOutList from "@app/client/components/userComponents/cartList";
import CheckOutForm from "@app/client/components/userComponents/checkOutForm";
import { makeOrder } from "@app/client/data/order";
import { getUser } from "@app/client/data/user.data";
import Image from "next/image";

async function CheckOut() {
  const user = await getUser();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Checkout</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <CheckOutList />
        </div>
        <div>
          <CheckOutForm user={user} />
        </div>
      </div>
    </div>
  );
}
export default CheckOut;
