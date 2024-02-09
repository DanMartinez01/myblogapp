"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

import capybara from "../../public/capybara.jpeg";

export default function Inputs() {
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
    <div className="max-w-screen-sm w-2/4 mt-8">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          className="flex-1 border rounded-lg px-4  sm:px-6 sm:py-2 leading-relaxed bg-black text-white mb-2"
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          required
        />

        <textarea
          className="flex-1 border rounded-lg px-4  sm:px-6 sm:py-4 leading-relaxed bg-black text-white"
          id="content"
          value={content}
          onChange={handleContentChange}
          required
        ></textarea>

        <div className="flex justify-end">
          <button
            type="submit"
            className="border border-indigo-600 bg-black text-white text-sm rounded-lg py-1 px-2  mt-4"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
