"use client";
// import { useRouter } from "next/navigation";
// Opt out of caching for all data requests in the route segment

export default function DeleteBtn({ postId }) {
  // const router = useRouter();

  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      // router.refresh();
    } catch (e) {
      console.error(e);
    }
  }

  return <button onClick={handleClick}>Delete Post</button>;
}
