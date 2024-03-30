import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto px-10 flex  py-6 w-full md:px-6 border-t justify-between">
      <p className="text-xs  text-gray-500 dark:text-gray-400">
        &copy;{` ${new Date().getFullYear()} NyayHelp. All rights reserved.`}
      </p>
      <p className="text-xs  text-gray-500 dark:text-gray-400">
        {`Developed and Maintained by`}{" "}
        <Link
          href={"https://www.linkedin.com/in/bijankundu"}
          target="_blank"
          className="text-primary"
        >
          Bijan Kundu
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
