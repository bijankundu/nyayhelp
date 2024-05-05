export interface INavItem {
  title: string;
  href: string;
}

export interface IHeaderProps {
  isAuthenticated: boolean;
  authCookie?: string;
  isAdmin?: boolean;
  routeList: {
    adminRoutes: INavItem[];
    publicRoutes: INavItem[];
    protectedRoutes?: INavItem[];
  };
}
