import Link from "next/link";
import Image from "next/image";

import DesktopHeader from "@/components/common/header/desktopHeader";
import MobileHeader from "@/components/common/header/mobileHeader";

import { INavItem } from "@/types/nav";

interface IHeaderProps {
  isAdmin?: boolean;
}

const navItemsList: {
  adminRoutes: INavItem[];
  publicRoutes: INavItem[];
} = {
  adminRoutes: [
    {
      title: "Create New Blog",
      href: "/admin/add-blog",
    },
  ],
  publicRoutes: [
    {
      title: "Forum",
      href: "/forum",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Add question",
      href: "/new-question",
    },
  ],
};

const Header = (
  { isAdmin = false }: Readonly<IHeaderProps> = { isAdmin: false }
) => {
  return (
    <nav className="flex gap-10 md:gap-6 justify-between items-center px-6 md:py-10 md:px-10 h-[9.7vh] fixed top-0 z-50 w-full backdrop-blur-xl bg-white/60 drop-shadow-lg">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src={
            "https://cdn.pixelbin.io/v2/small-queen-10eece/erase.bg()/Screenshot_2023-08-27_at_1_56_53_AM.png"
          }
          alt="NyayHelp Logo"
          width={80}
          height={60}
        />
      </Link>

      <>
        <div className="hidden md:block">
          <DesktopHeader isAdmin={isAdmin} routeList={navItemsList} />
        </div>
        <div className="md:hidden">
          <MobileHeader isAdmin={isAdmin} routeList={navItemsList} />
        </div>
      </>
    </nav>
  );
};

export default Header;
