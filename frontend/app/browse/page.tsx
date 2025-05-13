import { useEffect, useState } from "react";
import { Movie } from "../lib/definitions";
import MovieCard from "../ui/movie-card";

export default function Page() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    try {
      const response = await fetch("api/movies", {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      const data: Movie[] = await response.json();
      setMovies(data);
    } catch (error) {}
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies?.map((movie) => {
          return (
            <MovieCard
              name={movie.name}
              posterUrl={movie.posterUrl}
              releaseDate={movie.releaseDate}
              revenue={movie.revenue}
              imdbRating={movie.imdbRating}
            />
          );
        })}
      </div>
    </>
  );
}
