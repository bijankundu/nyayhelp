import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MessageSquareText, ThumbsUp, ThumbsDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

dayjs.extend(relativeTime);

const ForumCard = () => {
  return (
    <Link href={`/forum/test-slug`}>
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold">What is contract law?</h2>
        <p className="text-gray-600">
          Contract law is a body of law that governs, enforces, and interprets
          agreements related to an exchange of goods, services, properties, or
          money.
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center text-sm text-gray-500">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{dayjs("2024-02-24T16:25:12.221Z").fromNow()}</p>
          </div>
          <div className="flex gap-5">
            <div className="text-gray-600 flex gap-1 text-sm items-center">
              <ThumbsUp size={"18px"} />
              <span>30</span>
            </div>
            <div className="text-gray-600 flex gap-1 text-sm items-center">
              <ThumbsDown size={"18px"} />
              <span>20</span>
            </div>
            <div className="text-gray-600 flex gap-1 text-sm items-center">
              <MessageSquareText size={"18px"} />
              <span>13</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForumCard;
