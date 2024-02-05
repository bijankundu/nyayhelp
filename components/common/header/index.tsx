import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="text-md font-medium">
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <nav className="flex gap-10 md:gap-6 justify-between items-center py-10 px-10 h-[8vh] bg-white fixed top-0 z-50 w-full border-b-[1px]">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={
            "https://cdn.pixelbin.io/v2/small-queen-10eece/erase.bg()/Screenshot_2023-08-27_at_1_56_53_AM.png"
          }
          alt="VoyagersTribe"
          width={80}
          height={60}
        />
      </Link>

      <div className="flex gap-8 items-center">
        <NavItem href="/contact">Forum</NavItem>
        <NavItem href="/blog">Blog</NavItem>
        <NavItem href="/about">About</NavItem>
        <NavItem href="/login">
          <Button>Login</Button>
        </NavItem>
      </div>
    </nav>
  );
};

export default Header;
