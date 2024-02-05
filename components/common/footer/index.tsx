const Footer = () => {
  return (
    <footer className="mt-auto px-10 flex  py-6 w-full md:px-6 border-t justify-center">
      <p className="text-xs  text-gray-500 dark:text-gray-400">
        &copy;{` ${new Date().getFullYear()} NyayHelp. All rights reserved.`}
      </p>
    </footer>
  );
};

export default Footer;
