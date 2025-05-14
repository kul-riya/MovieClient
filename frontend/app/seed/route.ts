// import { movies, reviews } from '@/app/lib/placeholder-data'

// async function seedReviews() {

//       reviews.map(async (review) => {
//         await client.query(
//           `INSERT INTO movie (movie_id, comment)
//           VALUES (${review.movieId}, ${review.comment})
//           ON CONFLICT (id) DO NOTHING;
//         `);
//       });
  
  
// }

// async function seedMovies() {

//     movies.map(async (movie) => {
//           await client.query(`INSERT INTO movie (name, poster_url, release_date, revenue, imdb_rating)
//             VALUES (${movie.name}, ${movie.posterUrl}, ${movie.releaseDate}, ${movie.revenue} ,${movie.imdbRating})
//             ON CONFLICT (id) DO NOTHING;
//           `);
//         });
    
    
// }

// export async function GET() {
//     try {
//         seedMovies(),
//         seedReviews()
  
//       return Response.json({ message: 'Database seeded successfully' });
//     } catch (error) {
//       return Response.json({ error }, { status: 500 });
//     }
//   }