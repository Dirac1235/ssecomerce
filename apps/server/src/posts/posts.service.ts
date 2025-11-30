import prisma from "../helpers/prisma-client";

export async function createPost(data: any) {
  const post = await prisma.post.create({
    data: data,
  });
  return post;
}

export async function getManyPosts(query: any) {
  const posts = await prisma.post.findMany();
  return posts;
}

export async function getOnePost(id: number) {
  const post = await prisma.post.findFirst({ where: { id } });
  return post;
}

export async function updatePost(id: number, data: any) {
  const post = await prisma.post.update({
    where: { id },
    data: data,
  });
  return post;
}

export async function deletePost(id: number) {
  const post = await prisma.post.delete({ where: { id } });
  return post;
}
