import { Prisma } from "../../../../prisma/client";
import prisma from "../helpers/prisma-client";

export async function createProduct(data: any) {
  if (!data) {
    throw new Error("No data provided");
  }
  const { name, price, description, image, categoryId } = data;

  const product = await prisma.product.create({
    data: {
      name,
      price,
      description,
      image,
      category: categoryId ? { connect: { id: categoryId } } : undefined,
    },
    include: {
      category: true,
    },
  } as any);

  return product;
}

export async function getManyProducts(category: any, search: any) {
  console.log({ category, search });

  const whereClause: Prisma.ProductWhereInput = {
    OR: [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ],
  };

  if (category) {
    whereClause.categoryId = category;
  }

  const products = await prisma.product.findMany({
    where: whereClause,
    include: {
      category: true,
    },
  });
  return products;
}

export async function getOneProduct(id: string) {
  const product = await prisma.product.findFirst({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}

export async function updateProduct(id: string, data: any) {
  const product = await prisma.product.update({
    where: { id },
    data: data,
    include: {
      category: true,
    },
  });
  return product;
}

export async function deleteProduct(id: string) {
  const product = await prisma.product.delete({
    where: { id },
    include: {
      category: true,
    },
  });
  return product;
}
