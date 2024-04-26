import { Button } from "@/components/ui/button";
import NavItem from "@/components/common/header/navItem";

import { IHeaderProps } from "@/types/nav";

interface IDesktopHeaderProps extends IHeaderProps {}

const DesktopHeader = (
  { isAdmin = false, routeList }: IDesktopHeaderProps = {
    isAdmin: false,
    routeList: {
      adminRoutes: [],
      publicRoutes: [],
    },
  }
) => {
  return (
    <div className="flex gap-8 items-center">
      {
        <>
          {isAdmin && (
            <>
              {routeList.adminRoutes.map((route) => (
                <NavItem key={route.href} href={route.href}>
                  {route.title}
                </NavItem>
              ))}
            </>
          )}
          {routeList.publicRoutes.map((route) => (
            <NavItem key={route.href} href={route.href}>
              {route.title}
            </NavItem>
          ))}
          <NavItem href="/login">
            <Button>Login</Button>
          </NavItem>
        </>
      }
    </div>
  );
};

export default DesktopHeader;
