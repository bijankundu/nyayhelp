import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";

import landingImage from "@/assets/images/landing-bg.png";

const Landing = () => {
  return (
    <section className="min-h-[80vh] flex justify-center items-center w-full relative">
      <div className="relative h-[80vh] bg-black">
        <div className="w-screen h-[80vh] relative">
          <Image
            src={landingImage}
            alt="Landing Image"
            fill={true}
            className="landing-overlay opacity-40 object-cover"
          />
        </div>
      </div>
      <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-full items-center flex flex-col gap-5">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-7xl/none text-center text-white">
          Welcome to NyayHelp
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
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
