// Template from nextjs docs:
// import { NextRequest } from 'next/server';
 
// export async function GET(request: NextRequest) {
//   const response = await fetch('https://example.com/api/data', {
//     // Optional: forward some headers, add auth tokens, etc.
//     headers: { Authorization: `Bearer ${process.env.API_TOKEN}` },
//   });
 
//   // Transform or forward the response
//   const data = await response.json();
//   const transformed = { ...data, source: 'proxied-through-nextjs' };
 
//   return new Response(JSON.stringify(transformed), {
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

import { NextRequest } from "next/server";
import { Movie } from "@/app/lib/definitions";

export async function GET() {
    try {
        const response = await fetch(`http://localhost:8080/api/movies`, {
            method: 'GET',
            headers: { 'Content-type': 'application/json'}
        })

        const data = await response.json();
        
        // const transformed = { ...data, source: 'proxied-through-nextjs' };

        return new Response(JSON.stringify(data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.log("Couldn't get all movies");
    }
}

export async function POST(request: NextRequest) {
    
    const { name, releaseDate, imdbRating, revenue } = await request.json();

    const newMovie = { name, releaseDate, imdbRating, revenue };
    console.log(JSON.stringify(newMovie));
    

    try {
        const res = await fetch('http://localhost:8080/api/movies', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie),
          });
    
          return new Response(JSON.stringify(newMovie), {
            status: 201,
            headers: { 'Content-Type': 'application/json' }
          });
    } catch (error) {
        console.log("couldn't create movie");
        
    }    
    
}