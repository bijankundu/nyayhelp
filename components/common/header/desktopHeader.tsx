import { Button } from "@/components/ui/button";
import NavItem from "@/components/common/header/navItem";
import DesktopUserMenu from "@/components/common/header/desktopUserMenu";

import { IHeaderProps } from "@/types/nav";

interface IDesktopHeaderProps extends IHeaderProps {}

const DesktopHeader = (
  {
    isAuthenticated,
    authCookie = "",
    isAdmin = false,
    routeList,
  }: IDesktopHeaderProps = {
    isAuthenticated: false,
    authCookie: "",
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
          {!isAuthenticated ? (
            <NavItem href="/login">
              <Button>Login</Button>
            </NavItem>
          ) : (
            <DesktopUserMenu authCookie={authCookie} />
          )}
        </>
      }
    </div>
  );
};

export default DesktopHeader;
