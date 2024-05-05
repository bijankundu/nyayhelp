const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const getCurrentUser = async (authCookie: string) => {
  const requestOptions: {
    credentials: RequestCredentials;
    headers?: {
      cookie: string;
    };
  } = {
    credentials: "include",
  };

  if (authCookie) {
    requestOptions.headers = {
      cookie: `x-user=${authCookie}`,
    };
  }

  const res = await fetch(
    `${apiBaseUrl}/api/fakeauth/get-user`,
    requestOptions
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getCurrentUser };
