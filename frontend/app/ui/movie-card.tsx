import { Movie } from "../lib/definitions";
import Image from "next/image";

const MovieCard = (movie: Movie) => {
  return (
    <div className="border-0.5 border-black rounded-lg py-5 lg:py-7 px-3 lg:px-5">
      <div className="flex flex-col gap-2 mx-auto justify-between">
        <div className="relative max-w-5/6">
          <Image src={movie.posterUrl} alt={movie.name} />
          <p className="">{movie.name}</p>
        </div>
        <div className="flex flex-col gap-0">
          <p>{movie.releaseDate}</p>
          <span>{movie.imdbRating}</span>
          <span>{movie.imdbRating}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
