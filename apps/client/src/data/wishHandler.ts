"use server";
import { cookies } from "next/headers";


export async function getWishList() {
  const cookieStore = await cookies();
  const wishListCookie = await cookieStore.get("wishList");
    let wishList = [];

    if (wishListCookie && wishListCookie.value) {
      wishList = JSON.parse(wishListCookie.value);
      (await cookieStore).delete("wishList");
    }
  return wishList;
}

export async function addToWishList(data) {
  try {
    const wishListCookie = await cookieStore.get("wishList");
    let wishList = [];

    if (wishListCookie && wishListCookie.value) {
      wishList = JSON.parse(wishListCookie.value);
      cookieStore.delete("wishList");
    }

    const itemIndex = wishList.findIndex((item: any) => item.id === data.id);

    if (itemIndex === -1) {
      wishList.push(data as never);
    } else {
      wishList.splice(itemIndex, 1);
    }

    cookieStore.set({
      name: "wishList",
      value: JSON.stringify(wishList),
    });
  } catch (error) {
    console.error("Error managing wish list:", error);
  }
}

export async function removeFromWishList(id) {
  const wishListCookie =  await cookieStore.get("wishList");
  let wishList = [];
  if (wishListCookie && wishListCookie.value) {
    wishList = JSON.parse(wishListCookie.value);
    cookieStore.delete("wishList");
  }

  wishList?.filter((data: any) => data.id != id);
  cookieStore.set({
    name: "wishList",
    value: JSON.stringify(wishList),
  });
}


