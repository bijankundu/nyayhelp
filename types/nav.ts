export interface INavItem {
  title: string;
  href: string;
}

export interface IHeaderProps {
  isAdmin?: boolean;
  routeList: {
    adminRoutes: INavItem[];
    publicRoutes: INavItem[];
  };
}
