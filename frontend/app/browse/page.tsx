"use client";

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
      <div className="bg-black pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 px-20 lg:px-0 lg:grid-cols-4 gap-10 md:gap-18">
            {movies?.map((movie, index) => {
              return (
                <MovieCard
                  key={index}
                  id={movie.id}
                  name={movie.name}
                  posterUrl={movie.posterUrl}
                  releaseDate={movie.releaseDate}
                  revenue={movie.revenue}
                  imdbRating={movie.imdbRating}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
