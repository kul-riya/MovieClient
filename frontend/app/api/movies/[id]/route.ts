import { NextRequest } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: number }> },
  ) {
    const id = (await params).id;

    try {
        const response = await fetch(`http://localhost:8080/api/movies/${id}`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json'}
        })

        const data = await response.json();
        const transformed = { ...data, source: 'proxied-through-nextjs' };
        console.log(transformed);
        

        return new Response(JSON.stringify(transformed), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log("Couldn't get movie by id");
    }
}