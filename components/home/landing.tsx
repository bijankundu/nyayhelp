import Link from "next/link";
import { Button } from "../ui/button";

const Landing = () => {
  return (
    <section className="min-h-[60vh] flex justify-center items-center w-full">
      <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none text-center">
          Welcome to NyayHelp
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Your one-stop platform for all law-related educational content
        </p>

        <div className="w-full flex justify-center">
          <Link href="/login">
            <Button size={"lg"}>Explore Blogs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
