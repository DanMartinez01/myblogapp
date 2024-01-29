import DeleteBtn from "../components/DeleteBtn";
import Image from "next/image";
import capybara from "../../public/capybara.jpeg";

export default function Post({ id, title, content, author }) {
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
          <p className="text-sm w-100">{content}</p>
          {/* <div className="flex justify-end">
            <DeleteBtn postId={id} />
          </div> */}
        </div>
      </div>
      <div class="flex justify-end items-center text-xs w-full">
        <div class="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
          <button className="hover:underline">
            <small>Like</small>
          </button>
          <small class="self-center">.</small>
          <DeleteBtn postId={id} />
        </div>
      </div>
    </div>
  );
}
