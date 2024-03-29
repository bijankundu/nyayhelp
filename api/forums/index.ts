const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL;

const getAllForumQuestions = async ({
  limit = 10,
}: { limit?: number } = {}) => {
  const res = await fetch(`${apiBaseUrl}/question`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const getQuestionById = async (id: string) => {
  const res = await fetch(`${apiBaseUrl}/question/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export { getAllForumQuestions, getQuestionById };
