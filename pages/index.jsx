import Link from "next/link";
import prisma from "../lib/prisma";
import Post from "../app/components/Post";
import Form from "@/app/components/Form";
import Article from "../app/components/Article";
import Footer from "../app/components/Footer";
// Example for importing global styles
import "../styles/globals.css";

export async function getServerSideProps() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  console.log(posts);
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto">
      <Article />
      <div className="border-t mt-10 pt-12 pb-32 px-4 lg:px-0">
        <Link
          href={"/add-post"}
          className="border-b-2 border-white hover:text-indigo-600 transition-colors hover:border-indigo-600 "
        >
          Post your comment:
        </Link>
        {/* <Form /> */}
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            author={post.author}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
