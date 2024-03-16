import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MessageSquareText, ThumbsUp, ThumbsDown } from "lucide-react";

import { getQuestionById } from "@/api/forums";
import { Forum } from "@/types/forum";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

dayjs.extend(relativeTime);

interface ForumCardProps {
  cardData: Forum;
}

const ForumCard: React.FC<ForumCardProps> = ({ cardData }) => {
  const { id, title, description, createdOn } = cardData;

  return (
    <Link href={`/forum/${id}`}>
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">
          {description.length > 100
            ? `${description.substring(0, 100)}...`
            : description}
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-2 items-center text-sm text-gray-500">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/300" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p>{dayjs(createdOn).fromNow()}</p>
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
