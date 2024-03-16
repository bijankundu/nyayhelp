import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { shimmer, toBase64 } from "@/lib/image";
import dayjs from "dayjs";

import { Blog } from "@/types/blog";

interface BlogCardProps {
  cardData: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ cardData }) => {
  const { id, image, title, description, createdOn } = cardData;

  return (
    <Link href={`/blogs/${id}`}>
      <Card className="h-full flex flex-col justify-between">
        <CardHeader className="p-0">
          <div className="h-60 rounded-t-xl mb-3">
            <div className="relative h-[inherit]">
              <Image
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(350, 250)
                )}`}
                src={image}
                alt="blog"
                fill={true}
                className="rounded-t-xl object-cover"
              />
            </div>
          </div>
        </CardHeader>
        <div className="px-4 flex flex-col gap-2 flex-1">
          <CardTitle className="tracking-normal leading-normal">
            {title}
          </CardTitle>
          <CardDescription>
            {description.length > 100
              ? `${description.substring(0, 100)}...`
              : description}
          </CardDescription>
        </div>

        <CardFooter className="flex justify-between px-4 pb-4">
          <Button variant={"link"} className="p-0">
            Read More
          </Button>
          <p className="text-gray-400 text-sm">
            {dayjs(createdOn).format("MMM D, YYYY")}
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
