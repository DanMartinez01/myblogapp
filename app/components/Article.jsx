/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../../public/profile.jpeg";

const Article = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-white leading-tight">
              Building a Next.js Blog with PostgreSQL and Prisma.
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-400 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">
              Hey fellow tech enthusiasts! 👋 I recently embarked on a thrilling
              journey of creating my very own blog app using Next.js, PostgreSQL
              as the database, and Prisma as the ORM (Object-Relational
              Mapping). I'm here to share my experience and some exciting
              features that I've already implemented – and those that are still
              in the pipeline!
            </p>

            <p className="pb-6">
              First things first, diving into the world of Next.js was a
              game-changer for me. The ease of setting up a dynamic web
              application with React components and server-side rendering made
              the development process incredibly smooth. Pairing it with Prisma,
              which acts as a bridge between my application and the PostgreSQL
              database, has proven to be a robust and efficient choice.
            </p>

            <p className="pb-6">
              Seamless Commenting Experience One of the highlights of my blog
              app is the ability to post and delete comments seamlessly. Thanks
              to Prisma's powerful querying capabilities, managing and
              manipulating data in the PostgreSQL database becomes a breeze.
              Users can now engage in meaningful conversations, share their
              thoughts, and even clean up their comments if needed.
            </p>
            <p className="pb-6">
              Wrapping Up Building a Next.js blog with PostgreSQL and Prisma has
              been an incredible learning experience. The seamless integration
              of these technologies allows for a robust, scalable, and
              performant application. The satisfaction of seeing comments flow
              in and being able to interact with them effortlessly is truly
              rewarding. Stay tuned for the upcoming authentication features!
              Meanwhile, feel free to drop your thoughts and suggestions in the
              comments section below. Happy coding! 🚀
            </p>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 md:border-t md:border-b md:border md:rounded">
              <div className="flex py-2">
                <Image
                  src={profilePic}
                  class="h-10 w-10 rounded-full mr-2 object-cover"
                  alt=""
                />
                <div>
                  <p className="font-semibold text-gray-400 text-sm">
                    {" "}
                    Daniela Martinez{" "}
                  </p>
                  <p className="font-semibold text-gray-400 text-xs">
                    {" "}
                    Fullstack dev{" "}
                  </p>
                </div>
              </div>
              <p className="text-gray-400 py-3">
                I write about my journey learning new stuff.
              </p>
              <Link
                href="https://www.linkedin.com/in/danielaluciamartinez"
                className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded"
              >
                {" "}
                Follow
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Article;
