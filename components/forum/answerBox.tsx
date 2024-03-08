import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CommentBox from "./commentBox";
import AddComment from "./addComment";

import { formatDate } from "@/lib/utils";

const AnswerBox = () => {
  return (
    <div className="flex gap-5 pt-5 border-b">
      <div className="w-4/12 flex flex-col items-center justify-start">
        <div className="flex flex-col gap-4">
          <div className="cursor-pointer rounded-full border border-gray-500 h-10 w-10 flex items-center justify-center text-gray-500 bg-white hover:text-primary hover:border-primary hover:bg-blue-100">
            <ChevronUp className="h-6 w-6" />
          </div>
          <p className="w-full text-center font-semibold text-gray-700">20</p>
          <div className="cursor-pointer rounded-full border border-gray-500 h-10 w-10 flex items-center justify-center text-gray-500 bg-white hover:text-primary hover:border-primary hover:bg-blue-100">
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-base tracking-tight text-gray-700">
            Per year, that seems like 10% of what South Korea is now paying,
            while the US troop levels are somewhat similar (tens of thousands)
            in both countries. Is the German payment figure really cumulative
            over 9 years, and if it is why is that? (It&apos;s been suggested in
            an answer-comment below that South Korea should pay much more per US
            soldier given the risk of North Korean attack. However, the formal
            structure of the US-SK costs sharing agreement doesn&apos;t seem to
            have anything like that explicitly factored in. The high-level
            breakdown is on labor-sharing, logistics-cost sharing, and in-kind
            contributions. Of course, as one might say, there are many ways to
            slice a price. So, if there is indeed an accounting trick that
            covers up for that, it should be explained in an answer, rather than
            merely conjectured.)
          </p>

          <div className="flex justify-end items-center">
            <div className="flex gap-2 items-center text-sm text-gray-500">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://i.pravatar.cc/300" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p>
                  Answered by <span className="text-primary">John Doe</span>
                </p>
                <p className="text-xs text-gray-500">
                  {formatDate("2024-02-24T16:25:12.221Z")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col border-t my-5">
          <CommentBox />
          <CommentBox />
          <CommentBox />
          <div className="flex pt-4">
            <AddComment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerBox;
