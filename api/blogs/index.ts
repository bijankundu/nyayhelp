const getAllBlogs = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/blogs`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getBlogById = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/blogs/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getAllBlogs, getBlogById };
