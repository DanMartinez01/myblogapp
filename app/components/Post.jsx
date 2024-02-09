import { useState } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Image from "next/image";
import capybara from "../../public/capybara.jpeg";

export default function Post({ id, title, content, author }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-screen-sm w-2/4 mt-8">
      <div className="flex">
        <div className="flex-shrink-0 mr-3">
          <Image
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src={capybara}
            alt=""
            width="100"
            height="100"
          />
        </div>
        <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <p>{title}:</p>
          <p className="text-sm">{content}</p>
        </div>
      </div>
      <div className="flex justify-end items-center text-xs w-full">
        <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
          <button className="hover:underline" onClick={handleLikeClick}>
            <small>{isLiked ? "Unlike" : "Like"}</small>
          </button>
          {isLiked && <small className="self-center">🤍</small>}{" "}
          {/* Heart icon */}
          <small className="self-center">.</small>
          <DeleteBtn postId={id} />
        </div>
      </div>
    </div>
  );
}
