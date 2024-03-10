import Link from "next/link";

import BlogCard from "@/components/common/blogCard";
import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <section className="p-10 flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Blog Posts
      </h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
        Read our blog posts.
      </p>

      <div className="w-full grid grid-cols-3 gap-10 justify-between">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="mx-auto">
            <BlogCard />
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