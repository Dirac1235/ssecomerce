"use server";
import Footer from "@app/client/components/userComponents/footer";
import NavBar from "@app/client/components/userComponents/navbar";
import { getManyCategories } from "@app/client/data/catagory.data";
import { getUser } from "@app/client/data/user.data";

async function UserLayout({ children }) {
  const user = await getUser();
  const categories = await getManyCategories();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar session={user} categories={categories} />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
export default UserLayout;
