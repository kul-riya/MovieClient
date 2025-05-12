import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    const { comment, movieId} = await request.json();
    const newReview = { comment, movieId};

    try {
        const result = await fetch("http://localhost:8080/api/reviews", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newReview)
        })

        const data = await result.json();
        const transformed = { ...data, source: 'proxied-from-next'};
        return new Response(JSON.stringify(transformed), { headers: {'Content-type': 'application/json'}, status: 201})
    } catch (error) {
        console.log("Couldn't post review");  
    }
}