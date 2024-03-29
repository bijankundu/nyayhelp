import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ForumCard from "@/components/common/forumCard";
import { getAllForumQuestions } from "@/api/forums";
import { Question } from "@/types/question.types";

const Page = async () => {
  const {
    question: forumQuestions = [],
  }: {
    question: Question[];
  } = await getAllForumQuestions();

  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 max-w-[50vw]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Forum Discussions
        </h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
          Join the discussion.
        </p>

        <div className="w-full flex gap-5 mb-5">
          <Input
            type="text"
            placeholder="Search questions"
            className="w-full"
          />
          <Button>Search</Button>
        </div>

        <div className="w-full flex flex-col items-center gap-5">
          {forumQuestions.map((forumData) => (
            <div key={forumData._id} className="w-full">
              <ForumCard cardData={forumData} />
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="#">
            <Button>Load More</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
