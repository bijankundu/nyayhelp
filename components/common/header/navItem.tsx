import Link from "next/link";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className="text-xl md:text-base md:font-medium text-gray-900 hover:text-gray-600"
    >
      {children}
    </Link>
  );
};

export default NavItem;
