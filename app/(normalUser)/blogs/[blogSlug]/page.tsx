import dayjs from "dayjs";
import Image from "next/image";
import { Calendar } from "lucide-react";

import { shimmer, toBase64 } from "@/lib/image";

import { getBlogById } from "@/api/blogs";
import { Blog } from "@/types/blog";

const Page = async ({ params }: { params: { blogSlug: string } }) => {
  const { blogSlug } = params;

  const { data: blogData }: { data: Blog } = await getBlogById(blogSlug);

  const { title, content, createdOn } = blogData;

  return (
    <div className="py-10 flex flex-col items-center">
      <div className="max-w-[680px] flex flex-col gap-4">
        <section className="">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl text-left">
            {title}
          </h1>
          <div className="flex gap-2 items-center text-gray-500 ">
            <Calendar size={"20px"} />
            <p className="text-sm/relaxed dark:text-gray-400 text-left">
              {`Published on ${dayjs(createdOn).format("MMM D, YYYY")}`}
            </p>
          </div>
        </section>
        <section>
          <div className="h-72 rounded mb-3">
            <div className="relative h-[inherit]">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(680, 288)
                )}`}
                src="https://via.assets.so/img.jpg?w=680&h=288"
                alt="blog"
                fill={true}
                className="rounded object-cover"
              />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-5">{content}</section>
      </div>
    </div>
  );
};

export default Page;
