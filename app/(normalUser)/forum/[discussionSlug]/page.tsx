import dynamic from "next/dynamic";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AnswerContainer from "@/components/forum/answerContainer";

import { formatDate } from "@/lib/utils";

import { getQuestionById } from "@/api/forums";
import { Question } from "@/types/question.types";

const AddAnswerContainer = dynamic(
  () => import("@/components/forum/addAnswerContainer"),
  {
    ssr: false,
  }
);

const Page = async ({ params }: { params: { discussionSlug: string } }) => {
  const { discussionSlug } = params;

  const {
    question: questionData,
  }: {
    question: Question;
  } = await getQuestionById(discussionSlug);

  const { title, description, createdAt } = questionData;

  return (
    <div className="py-10 flex flex-col items-center">
      <div className="w-[90vw] md:max-w-[60vw] md:w-[55vw] flex flex-col gap-4">
        <section className="flex gap-5 pb-5 border-b">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col gap-4">
              <div className="cursor-pointer rounded-full border border-gray-500 h-10 w-10 flex items-center justify-center text-gray-500 bg-white hover:text-primary hover:border-primary hover:bg-blue-100">
                <ChevronUp className="h-6 w-6" />
              </div>
              <p className="w-full text-center font-semibold text-gray-500">
                20
              </p>
              <div className="cursor-pointer rounded-full border border-gray-500 h-10 w-10 flex items-center justify-center text-gray-500 bg-white hover:text-primary hover:border-primary hover:bg-blue-100">
                <ChevronDown className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            <h4 className="scroll-m-20 md:text-xl font-extrabold tracking-tight lg:text-2xl text-left w-full">
              {title}
            </h4>
            <p className="text-sm md:text-base tracking-tight text-gray-700">
              {description}
            </p>

            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
              <div className="flex gap-2">
                <Badge variant="secondary" className="font-medium bg-blue-100">
                  Tag 1
                </Badge>
                <Badge variant="secondary" className="font-medium bg-blue-100">
                  Tag 2
                </Badge>
                <Badge variant="secondary" className="font-medium bg-blue-100">
                  Tag 3
                </Badge>
              </div>
              <div className="flex gap-2 items-center text-sm text-gray-500">
                <Avatar className="h-6 w-6 md:h-8 md:w-8">
                  <AvatarImage src="https://i.pravatar.cc/300" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-xs md:text-base">
                    Posted by <span className="text-primary">John Doe</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate(createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center">
            <h5 className="scroll-m-20 md:text-xl font-medium tracking-tight lg:text-xl text-left w-full">
              3 Answers
            </h5>
          </div>
          <AnswerContainer />
          <AnswerContainer />
          <AnswerContainer />
          <AddAnswerContainer />
        </section>
      </div>
    </div>
  );
};

export default Page;
