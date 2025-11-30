"use server";

import fetcher from "./fetcher";
import revalidate from "./revalidate";

export async function createProduct(data) {
  console.log({ data });
  const res = await fetcher.post("/products", data);
  revalidate({ tags: ["PRODUCTS"] });
  console.log(res.data);
  return res.data;
}

export async function getManyProducts() {
  const res = await fetcher.get("/products");
  if (res?.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function getOneProduct(id) {
  const res = await fetcher.get(`/products/${id}`);
  if (res?.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function updateProduct(id, data) {
  const res = await fetcher.put(`/products/${id}`, data);
  if (res?.status === 200) {
    return res.data;
  } else {
    return [];
  }
}

export async function deleteProduct(id) {
  const res = await fetcher.get(`/products/${id}`);
  if (res?.status === 200) {
    return res.data;
  } else {
    return [];
  }
}
