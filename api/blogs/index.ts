const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const getAllBlogs = async ({ limit = 10 }: { limit?: number } = {}) => {
  const res = await fetch(`${apiBaseUrl}/blog`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getBlogById = async (id: string) => {
  const res = await fetch(`${apiBaseUrl}/blog/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getAllBlogs, getBlogById };
