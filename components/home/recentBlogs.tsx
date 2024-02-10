import Link from "next/link";
import { Button } from "@/components/ui/button";

import BlogCard from "@/components/common/blogCard";

const RecentBlogs = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Recent Blog Posts
      </h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
        Read our latest blog posts.
      </p>

      <div className="w-full grid grid-cols-3 gap-10 justify-between px-10">
        <div className="mx-auto">
          <BlogCard />
        </div>
        <div className="mx-auto">
          <BlogCard />
        </div>
        <div className="mx-auto">
          <BlogCard />
        </div>
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
