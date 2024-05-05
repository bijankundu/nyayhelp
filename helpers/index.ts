import { cookies } from "next/headers";

import { getCurrentUser } from "@/api/user";

const checkIsAdmin = async (authCookie: string) => {
  const { user } = await getCurrentUser(authCookie);

  return user?.role === "ADMIN";
};

const checkIsAuthenticated = () => {
  const nextCookies = cookies();

  const authCookie = nextCookies.get("x-user")?.value || "";

  if (!authCookie) {
    return {
      isAuthenticated: false,
    };
  }

  return {
    isAuthenticated: true,
    authCookie,
  };
};

export { checkIsAdmin, checkIsAuthenticated };
