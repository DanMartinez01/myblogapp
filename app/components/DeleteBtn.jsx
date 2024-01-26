"use client";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ postId }) {
  const router = useRouter();
  // router.refresh();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.error(e);
    }
    router.refresh();
  }

  return <button onClick={handleClick}>Delete Post</button>;
}
