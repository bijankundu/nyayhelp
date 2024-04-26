import QuestionForm from "@/components/newQuestion/questionForm";

const Page = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 md:[70wv] lg:w-[50vw] px-6">
        <h1 className="scroll-m-20 text-2xl md:text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          Have a question?
        </h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
          Ask the community.
        </p>
        <div className="w-full">
          <QuestionForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
