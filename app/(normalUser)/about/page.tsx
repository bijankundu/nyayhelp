import Image from "next/image";

import TeamCard from "@/components/about/teamCard";
import ContactForm from "@/components/about/contactForm";

import aboutUsVector from "@/assets/images/about-us.svg";

const Page = () => {
  return (
    <section className="py-10 flex flex-col items-center gap-10">
      <div className="flex justify-between w-full px-10 items-center">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-left">
            Explore, Analyze, Address <br />
            <span className="text-4xl">Your Legal Requirements</span>
          </h1>
          <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 text-left">
            Expand your understanding of your legal matter.
          </p>
        </div>
        <div className="h-80 relative flex-1">
          <Image src={aboutUsVector} alt="about us vector" fill={true} />
        </div>
      </div>
      <div className="mt-10 px-10 flex flex-col gap-2 w-full">
        <h2 className="text-3xl font-bold text-left">About Us</h2>
        <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400 text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum porro
          officiis voluptatibus vero, dolorem temporibus culpa officia accusamus
          quisquam corrupti deleniti enim ducimus dolore quis quae rem quasi
          impedit sint, illo at eveniet facilis. Explicabo nostrum, dignissimos
          cupiditate cumque quae similique, sit debitis, error aut tempora ea
          autem. Perferendis dolor ad autem in, fugiat harum placeat tenetur
          nobis ipsa sint, voluptatibus, odit aperiam expedita? Non reiciendis
          nobis saepe ipsum vel dignissimos odit sunt accusantium beatae
          consectetur? Eaque ipsam eveniet asperiores vel cumque ex quaerat non,
          reprehenderit recusandae nihil similique obcaecati labore dignissimos
          in temporibus minus explicabo minima saepe dicta aut molestiae
          corporis assumenda accusamus iusto? Aliquid nobis dolore ad dolor? Ad
          ab impedit necessitatibus voluptate, minima non, tempore blanditiis
          nobis nam totam ducimus odio facere consequatur praesentium quo
          laborum vitae corrupti! Qui amet necessitatibus officia dolores animi
          quia explicabo sequi ratione dolor? Facere vel magnam veniam.
          Voluptates, aliquid doloremque culpa, quaerat sit minima voluptatem
          officia velit, similique alias molestias reiciendis iure. Accusamus
          dolore quibusdam atque commodi reiciendis quam fugiat earum. Corporis,
          quae dignissimos. Aliquid, sit nihil accusamus perspiciatis
          architecto, reiciendis iure mollitia in, nisi molestias officia est
          nam incidunt quas dolorem. Porro dolore rem fugit dolorum quasi sunt,
          cum minus.
        </div>
      </div>
      <div className="mt-5 px-10 flex flex-col gap-2 w-full">
        <h2 className="text-3xl font-bold text-left">Our Vision</h2>
        <div className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400 text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum porro
          officiis voluptatibus vero, dolorem temporibus culpa officia accusamus
          quisquam corrupti deleniti enim ducimus dolore quis quae rem quasi
          impedit sint, illo at eveniet facilis. Explicabo nostrum, dignissimos
          cupiditate cumque quae similique, sit debitis, error aut tempora ea
          autem. Perferendis dolor ad autem in, fugiat harum placeat tenetur
          nobis ipsa sint, voluptatibus, odit aperiam expedita? Non reiciendis
          nobis saepe ipsum vel dignissimos odit sunt accusantium beatae
          consectetur? Eaque ipsam eveniet asperiores vel cumque ex quaerat non,
          reprehenderit recusandae nihil similique obcaecati labore dignissimos
          in temporibus minus explicabo minima saepe dicta aut molestiae
          corporis assumenda accusamus iusto? Aliquid nobis dolore ad dolor? Ad
          ab impedit necessitatibus voluptate, minima non, tempore blanditiis
          nobis nam totam ducimus odio facere consequatur praesentium quo
          laborum vitae corrupti! Qui amet necessitatibus officia dolores animi
          quia explicabo sequi ratione dolor? Facere vel magnam veniam.
          Voluptates, aliquid doloremque culpa, quaerat sit minima voluptatem
          officia velit, similique alias molestias reiciendis iure. Accusamus
          dolore quibusdam atque commodi reiciendis quam fugiat earum. Corporis,
          quae dignissimos. Aliquid, sit nihil accusamus perspiciatis
          architecto, reiciendis iure mollitia in, nisi molestias officia est
          nam incidunt quas dolorem. Porro dolore rem fugit dolorum quasi sunt,
          cum minus.
        </div>
      </div>
      <div className="mt-10 px-10 flex flex-col gap-4 w-full">
        <h2 className="text-3xl font-bold text-left">Meet the team</h2>
        <div className="grid grid-cols-4 gap-10">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
        </div>
      </div>

      <div className="mt-10 px-10 flex flex-col gap-2 w-full">
        <h2 className="text-3xl font-bold text-left">Have Queries?</h2>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-base/relaxed dark:text-gray-400 text-left">
          No worries! Feel free to contact us
        </p>
        <div className="flex mt-5">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
