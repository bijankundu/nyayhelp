const getAllForumQuestions = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/forums`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getQuestionById = async (id: string) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const res = await fetch(`${baseUrl}/api/forums/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getAllForumQuestions, getQuestionById };
