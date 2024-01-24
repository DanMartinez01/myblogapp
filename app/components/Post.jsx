import DeleteBtn from "../components/DeleteBtn";
import Image from "next/image";
import capybara from "../../public/capybara.jpeg";

export default function Post({ id, title, content, authorName }) {
  return (
    <div className="max-w-screen-sm w-2/4 my-2">
      <div className="space-y-4">
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
            <strong>{authorName}</strong>{" "}
            <span className="text-xs text-gray-400">3:34 PM</span>
            <p className="text-sm w-100">{content}</p>
            <DeleteBtn postId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
