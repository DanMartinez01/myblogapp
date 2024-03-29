import prisma from "../../../lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  const res = await request.json();
  const { title, content, author } = res;
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: true,
      // author: {
      //   create: {
      //     name: "ryan",
      //   },
      // },
      author,
    },
  });
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);

  return NextResponse.json({ result }, { revalidated: true, now: Date.now() });
}
