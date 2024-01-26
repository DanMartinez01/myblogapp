"use client";
import { useRouter } from "next/navigation";

export default function DeleteBtn({ postId }) {
  const router = useRouter();
  // router.refresh();

  async function handleClick() {
    try {
      console.log("Before DELETE request");
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      console.log("After DELETE request");
      router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button onClick={handleClick}>Delete Post</button>;
}
