// export interface Movie {
//   id?: number;
//   name: string;
//   releaseDate: string;
//   reviews?: Review[];
// }

// export interface Review {
//   id?: number;
//   movieId: number;
//   comment: string;
//   created?: string;
//   updated?: string;
// }

// export async function getAllMovies(): Promise<Movie[]> {
//   const res = await fetch(`/movies`);
//   if (!res.ok) throw new Error('Failed to fetch movies');
//   return res.json();
// }

// export async function getMovieById(id: number): Promise<Movie> {
//   const res = await fetch(`/movies/${id}`);
//   if (!res.ok) throw new Error('Movie not found');
//   return res.json();
// }

// export async function createMovie(movie: Movie): Promise<boolean> {
//   const res = await fetch(`/movies`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(movie),
//   });
//   return res.ok;
// }

// export async function createReview(comment: string, movieId: number): Promise<Review> {
//   const res = await fetch(`/reviews`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ comment, movie_id: movieId.toString() }),
//   });
//   if (!res.ok) throw new Error('Failed to create review');
//   return res.json();
// }
