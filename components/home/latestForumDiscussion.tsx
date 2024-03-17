import Link from "next/link";
import { Button } from "@/components/ui/button";

import ForumCard from "../common/forumCard";

import { getAllForumQuestions } from "@/api/forums";

import { Forum } from "@/types/forum";

const LatestForumDiscussion = async () => {
  const { data: forumQuestions }: { data: Forum[] } =
    await getAllForumQuestions({ limit: 3 });

  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
        Popular Forum Discussions
      </h1>
      <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
        Join the discussion.
      </p>

      <div className="w-full px-10 flex flex-col items-center gap-10">
        {forumQuestions.map((forumData) => (
          <div key={forumData.id} className="max-w-[50vw] w-full">
            <ForumCard cardData={forumData} />
          </div>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/forum">
          <Button>View All Discussions</Button>
        </Link>
      </div>
    </section>
  );
};

export default LatestForumDiscussion;
