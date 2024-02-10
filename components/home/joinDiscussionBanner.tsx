import Link from "next/link";

import { Button } from "../ui/button";

const JoinDiscussionBanner = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Join the Discussion
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Engage with our community of learners and share your insights,
            questions, and experiences.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <Link href="#">
            <Button size={"lg"}>Join Now</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JoinDiscussionBanner;
