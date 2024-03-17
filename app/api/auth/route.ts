export async function POST(request: Request) {
  const body = await request.json();
  console.log({ body });

  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = { success: true };

  return Response.json(data);
}
