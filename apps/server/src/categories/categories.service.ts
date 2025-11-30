import prisma from "../helpers/prisma-client";

export async function createCategory(data: any) {
  console.log({ data });

  const category = await prisma.category.create({
    data: data,
  });
  return category;
}

export async function getManyCategories() {
  const categories = await prisma.category.findMany();
  return categories;
}

export async function getOneCategory(id: string) {
  const category = await prisma.category.findFirst({ where: { id } });
  return category;
}

export async function updateCategory(id: string, data: any) {
  const category = await prisma.category.update({
    where: { id },
    data: data,
  });
  return category;
}

export async function deleteCategory(id: string) {
  const category = await prisma.category.delete({ where: { id } });
  return category;
}
