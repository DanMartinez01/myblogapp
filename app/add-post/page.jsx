"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();
  // router.refresh();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      router.refresh();
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="max-w-screen-sm w-2/4 my-2 px-4">
      <form onSubmit={handleSubmit} className="my-8">
        <h1>Add Comment:</h1>
        {/* <div className="flex flex-col mt-4">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={handleAuthorChange}
            required
            className="text-black"
          />
        </div> */}
        <div className="flex flex-col mt-4">
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="text-black"
          />
        </div>
        <div className="flex justify-center flex-col">
          <button
            type="submit"
            className="mx-auto border border-indigo-600 bg-black text-white rounded-lg py-2 px-4 font-semibold mt-10"
          >
            Submit
          </button>
          <Link href={"/"} className="mx-auto mt-4">
            View Feed
          </Link>
        </div>
      </form>
    </div>
  );
}
