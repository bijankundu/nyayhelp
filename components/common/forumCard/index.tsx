import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { MessageSquareText, ThumbsUp, ThumbsDown } from "lucide-react";

import { Question } from "@/types/question.types";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

dayjs.extend(relativeTime);

interface ForumCardProps {
  cardData: Question;
}

const ForumCard: React.FC<ForumCardProps> = ({ cardData }) => {
  const { title, description, _id, createdAt, total_likes, total_comments } =
    cardData;

  return (
    <Link href={`/forum/${_id}`}>
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
            <p>{dayjs(createdAt).fromNow()}</p>
          </div>
          <div className="flex gap-5">
            <div className="text-gray-600 flex gap-1 text-sm items-center">
              <ThumbsUp size={"18px"} />
              <span>{total_likes}</span>
            </div>
            {/* <div className="text-gray-600 flex gap-1 text-sm items-center">
              <ThumbsDown size={"18px"} />
              <span>20</span>
            </div> */}
            <div className="text-gray-600 flex gap-1 text-sm items-center">
              <MessageSquareText size={"18px"} />
              <span>{total_comments}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ForumCard;
