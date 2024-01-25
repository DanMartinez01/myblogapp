"use client";
import { useRouter } from "next/navigation";
// Opt out of caching for all data requests in the route segment
export const dynamic = "force-dynamic";

export default function DeleteBtn({ postId }) {
  const router = useRouter();

  async function handleClick() {
    try {
      await fetch(
        `/api/post/${postId}`,
        {
          method: "DELETE",
        },
        { cache: "no-store" }
      );
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button onClick={handleClick}>Delete Post</button>;
}
