import postgres from 'postgres';
import { movies, reviews } from '@/app/lib/placeholder-data'

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function seedReviews() {

  const insertedReviews = await Promise.all(
      reviews.map(async (review) => {
        return sql
          `INSERT INTO movie (movie_id, comment)
          VALUES (${review.movieId}, ${review.comment})
          ON CONFLICT (id) DO NOTHING;
        `;
      }),
    );
  
    return insertedReviews;
  
}

async function seedMovies() {

    const insertedMovies = await Promise.all(
        movies.map(async (movie) => {
          return sql
            `INSERT INTO movie (name, poster_url, release_date, revenue, imdb_rating)
            VALUES (${movie.name}, ${movie.posterUrl}, ${movie.releaseDate}, ${movie.revenue} ,${movie.imdbRating})
            ON CONFLICT (id) DO NOTHING;
          `;
        }),
      );
    
      return insertedMovies;
    
}

export async function GET() {
    try {
      const result = await sql.begin((sql) => [
        seedMovies(),
        seedReviews()
      ]);
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }