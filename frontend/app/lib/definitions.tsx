// See how types are generated automatically with an ORM like Prisma

export type Review = {
  id?: number;
  movieId: number;
  created?: string;
  updated?: string;
  comment: string;
};

export type Movie = {
  id?: number;
  name: string;
  releaseDate: string;
  revenue: number;
  imdbRating: number;
  reviews?: Review[];
};
