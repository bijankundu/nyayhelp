import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import NavItem from "@/components/common/header/navItem";
import { Button } from "@/components/ui/button";
import MobileBottomSheetFooter from "@/components/common/header/mobileBottomSheetFooter";

import { IHeaderProps } from "@/types/nav";

interface IMobileHeaderProps extends IHeaderProps {}

const MobileHeader = (
  {
    isAuthenticated,
    authCookie,
    isAdmin = false,
    routeList,
  }: IMobileHeaderProps = {
    isAuthenticated: false,
    authCookie: "",
    isAdmin: false,
    routeList: {
      adminRoutes: [],
      publicRoutes: [],
      protectedRoutes: [],
    },
  }
) => {
  return (
    <Sheet>
      <div className="flex justify-between items-center h-[8vh]">
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
      </div>
      <SheetContent side={"left"} className="justify-between flex flex-col">
        <SheetHeader>
          <SheetTitle>
            <Link href="/" className="flex items-center space-x-2">
              <span className="inline-block font-bold text-xl">NyayHelp</span>
            </Link>
          </SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-4 items-start mt-5">
              {
                <>
                  {isAdmin && (
                    <>
                      {routeList.adminRoutes.map((route) => (
                        <SheetClose key={route.href} asChild>
                          <NavItem href={route.href}>{route.title}</NavItem>
                        </SheetClose>
                      ))}
                    </>
                  )}
                  {routeList.publicRoutes.map((route) => (
                    <SheetClose key={route.href} asChild>
                      <NavItem key={route.href} href={route.href}>
                        {route.title}
                      </NavItem>
                    </SheetClose>
                  ))}
                  {isAuthenticated &&
                    routeList.protectedRoutes &&
                    routeList.protectedRoutes.map((route) => (
                      <SheetClose key={route.href} asChild>
                        <NavItem key={route.href} href={route.href}>
                          {route.title}
                        </NavItem>
                      </SheetClose>
                    ))}
                  {!isAuthenticated && (
                    <SheetClose asChild>
                      <NavItem href="/login">
                        <Button>Login</Button>
                      </NavItem>
                    </SheetClose>
                  )}
                </>
              }
            </div>
          </SheetDescription>
        </SheetHeader>
        {isAuthenticated && (
          <MobileBottomSheetFooter authCookie={authCookie as string} />
        )}
      </SheetContent>
    </Sheet>
  );
};

export default MobileHeader;
