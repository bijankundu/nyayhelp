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

const BlogCard = () => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader>
        <div className="h-60 rounded-t-xl mb-3">
          <div className="relative h-[inherit]">
            <Image
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 475)
              )}`}
              src="https://via.assets.so/img.jpg?w=350&h=250"
              alt="blog"
              fill={true}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        <CardTitle>
          Case Analysis: Murli S. Deora v. Union of India, (2001) | Health
          Hazards Linked to Cigarette Smoking
        </CardTitle>
        <CardDescription>
          The case &apos;Murli S. Deora v. Union of India&apos; was a landmark
          legal proceeding that exerted a considerable influence on the right to
          life of passive smokers.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between">
        <Button variant={"link"} className="p-0">
          Read More
        </Button>
        <p className="text-gray-400 text-sm">{dayjs().format("MMM D, YYYY")}</p>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
