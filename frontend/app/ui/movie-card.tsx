import { Movie } from "../lib/definitions";
import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";

const MovieCard = (movie: Movie) => {
  return (
    <Link href={`movies/${movie.id}`}>
      <div className="border  hover:border-white transition-shadow duration-300 overflow-hidden bg-stone-100 ">
        <div className="flex flex-col h-full">
          <div className="relative w-full overflow-hidden">
            <div className="aspect-[3/4] relative">
              <img
                src={movie.posterUrl}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                  <span className="text-white font-medium text-sm">
                    {movie.imdbRating}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col p-4 flex-grow">
            <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
              {movie.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{movie.releaseDate}</p>

            <div>${movie.revenue}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
