"use server";

import { revalidatePath, revalidateTag } from "next/cache";
/**
 * Revalidates Next.js paths and tags.
 * @param {object} param0 - The parameters for revalidation.
 * @param {string[]} [param0.tags] - An array of tags to revalidate.
 * @param {string[]} [param0.paths] - An array of paths to revalidate.
 * @returns {Promise<{revalidatedTags: string[], revalidatedPaths: string[], now: number} | Error>} An object containing the revalidated tags, paths, and current timestamp, or an error.
 */

export default async function revalidate({
  tags = [],
  paths = [],
}: {
  tags?: string[];
  paths?: string[];
}) {
  try {
    const revalidatedTags: string[] = [];
    const revalidatedPaths: string[] = [];
    paths?.forEach((item) => {
      revalidatePath(item);
      revalidatedPaths.push(item);
    });
    tags?.forEach((item) => {
      revalidateTag(item);
      revalidatedTags.push(item);
    });
    return { revalidatedTags, revalidatedPaths, now: Date.now() };
  } catch (error) {
    return error;
  }
}
