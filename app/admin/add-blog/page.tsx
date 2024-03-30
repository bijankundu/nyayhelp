import AddBlogForm from "@/components/admin/addBlogForm";

const Page = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 w-[50vw]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          What do you have in mind today?
        </h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-center">
          Share your thoughts with the community.
        </p>
        <div className="w-full">
          <AddBlogForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
