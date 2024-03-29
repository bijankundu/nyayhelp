import Link from "next/link";

import BlogCard from "@/components/common/blogCard";
import { Button } from "@/components/ui/button";

import { getAllBlogs } from "@/api/blogs";

import { Blog } from "@/types/blog";

const Page = async () => {
  const { blogs = [] }: { blogs: Blog[] } = await getAllBlogs();

  return (
    <section className="p-10 flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Blog Posts
      </h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
        Read our blog posts.
      </p>

      <div className="w-full grid grid-cols-4 gap-10 justify-between">
        {blogs.map((blog) => (
          <div key={blog._id} className="mx-auto w-full">
            <BlogCard cardData={blog} />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="#">
          <Button>Load More</Button>
        </Link>
      </div>
    </section>
  );
};

export default Page;
