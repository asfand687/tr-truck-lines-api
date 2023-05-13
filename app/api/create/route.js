export const POST = async (request) => {
  const { username, password, email } = await request.json();

  try {
      return new Response(JSON.stringify({username, password, email}), { status: 201 })
  } catch (error) {
      return new Response("Failed to create a new prompt", { status: 500 });
  }
}