export async function POST(request) {
    let data = await request.json();
    return Response.json({ message: 'Hello World', data:data });
  }