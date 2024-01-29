// import { NextResponse, NextRequest } from "next/server";
// import { revalidatePath } from "next/cache";
// import prisma from "@/lib/prisma";

// export async function DELETE(request, { params }) {
//   const id = params.id;
//   const post = await prisma.post.delete({
//     where: { id },
//   });

//   const path = request.nextUrl.searchParams.get("path") || "/";
//   revalidatePath(path);
//   return NextResponse.json(post, { revalidated: true, now: Date.now() });
// }

// api/post/[id].js

import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function DELETE(request, { params }) {
  const id = params.id;
  await prisma.post.delete({
    where: { id },
  });

  const path = request.nextUrl.searchParams.get("path") || "/";
  await revalidatePath(path);

  return NextResponse.json({ success: true });
}
