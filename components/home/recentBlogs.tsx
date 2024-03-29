import Link from "next/link";
import { Button } from "@/components/ui/button";

import BlogCard from "@/components/common/blogCard";

import { getAllBlogs } from "@/api/blogs";

import { Blog } from "@/types/blog";

const RecentBlogs = async () => {
  const { blogs }: { blogs: Blog[] } = await getAllBlogs({ limit: 4 });

  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Recent Blog Posts
      </h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
        Read our latest blog posts.
      </p>

      <div className="w-full grid grid-cols-4 gap-10 justify-between px-10">
        {blogs.slice(0, 4).map((blogData) => (
          <div key={blogData._id} className="mx-auto w-full">
            <BlogCard cardData={blogData} />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/blogs">
          <Button>View All Blogs</Button>
        </Link>
      </div>
    </section>
  );
};

export default RecentBlogs;
