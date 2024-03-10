import { ChevronDown, ChevronUp } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import AnswerBox from "@/components/forum/answerBox";

import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Page = ({ params }: { params: { discussionSlug: string } }) => {
  const { discussionSlug } = params;

  return (
    <div className="py-10 flex flex-col items-center">
      <div className="max-w-[60vw] w-[55vw] flex flex-col gap-4">
        <section className="flex gap-5 pb-5">
          <div className="w-4/12 flex flex-col items-center justify-center">
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
          <div className="flex flex-col gap-4">
            <h4 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-left w-full">
              Why is Europe (Germany in particular) apparently paying so little
              for US troop presence/protection, compared to South Korea?
            </h4>
            <p className="text-base tracking-tight text-gray-700">
              Per year, that seems like 10% of what South Korea is now paying,
              while the US troop levels are somewhat similar (tens of thousands)
              in both countries. Is the German payment figure really cumulative
              over 9 years, and if it is why is that? (It&apos;s been suggested
              in an answer-comment below that South Korea should pay much more
              per US soldier given the risk of North Korean attack. However, the
              formal structure of the US-SK costs sharing agreement doesn&apos;t
              seem to have anything like that explicitly factored in. The
              high-level breakdown is on labor-sharing, logistics-cost sharing,
              and in-kind contributions. Of course, as one might say, there are
              many ways to slice a price. So, if there is indeed an accounting
              trick that covers up for that, it should be explained in an
              answer, rather than merely conjectured.)
            </p>

            <div className="flex justify-between items-center">
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
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://i.pravatar.cc/300" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <p>
                    Posted by <span className="text-primary">John Doe</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatDate("2024-02-24T16:25:12.221Z")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center">
            <h5 className="scroll-m-20 text-xl font-medium tracking-tight lg:text-xl text-left w-full">
              3 Answers
            </h5>
            <Button size={"sm"}>Post your answer</Button>
          </div>
          <AnswerBox />
          <AnswerBox />
          <AnswerBox />
        </section>
      </div>
    </div>
  );
};

export default Page;
