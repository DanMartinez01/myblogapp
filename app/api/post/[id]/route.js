import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, res, { params }) {
  const id = params.id;
  res.setHeader("Cache-Control", "no-store");
  const post = await prisma.post.delete({
    where: { id },
  });

  return NextResponse.json(post);
}
