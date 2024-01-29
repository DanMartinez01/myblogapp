import Link from "next/link";
import prisma from "../lib/prisma";
import Post from "../app/components/Post";
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
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto">
      <Article />
      <div className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
        <Link href={"/add-post"} className="text-lg  my-6">
          Post your comment:
        </Link>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={post.author.name}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
}
