import Link from "next/link";
import prisma from "../lib/prisma";
import Post from "./components/Post";
import Article from "./components/Article";
import Footer from "./components/Footer";

// async function getPosts() {
//   const posts = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   console.log(posts);
//   return posts;
// }
async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      where: { published: true },
      include: {
        author: {
          select: { name: true },
        },
      },
    });

    console.log(posts);

    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col max-w-screen-lg mx-auto">
      <Article />
      <div className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
        <Link href={"/add-post"} className="text-lg  my-6">
          Post a comment:
        </Link>
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          );
        })}
      </div>
      <Footer />
    </main>
  );
}
