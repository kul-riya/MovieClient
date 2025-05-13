import { Movie, Review } from "./definitions";

const movies: Movie[] = [
  {
    name: "Inception",
    posterUrl: "https://image.tmdb.org/t/p/original/1.jpg",
    releaseDate: "2010-07-16",
    revenue: 825532764,
    imdbRating: 8.8,
  },
  {
    name: "Interstellar",
    posterUrl: "https://image.tmdb.org/t/p/original/2.jpg",
    releaseDate: "2014-11-07",
    revenue: 677471339,
    imdbRating: 8.6,
  },
  {
    name: "The Dark Knight",
    posterUrl: "https://image.tmdb.org/t/p/original/3.jpg",
    releaseDate: "2008-07-18",
    revenue: 1004558444,
    imdbRating: 9.0,
  },
  {
    name: "The Matrix",
    posterUrl: "https://image.tmdb.org/t/p/original/4.jpg",
    releaseDate: "1999-03-31",
    revenue: 466364845,
    imdbRating: 8.7,
  },
  {
    name: "Avatar",
    posterUrl: "https://image.tmdb.org/t/p/original/5.jpg",
    releaseDate: "2009-12-18",
    revenue: 2847246203,
    imdbRating: 7.8,
  },
  {
    name: "Titanic",
    posterUrl: "https://image.tmdb.org/t/p/original/6.jpg",
    releaseDate: "1997-12-19",
    revenue: 2187463944,
    imdbRating: 7.9,
  },
  {
    name: "The Godfather",
    posterUrl: "https://image.tmdb.org/t/p/original/7.jpg",
    releaseDate: "1972-03-24",
    revenue: 250000000,
    imdbRating: 9.2,
  },
  {
    name: "Fight Club",
    posterUrl: "https://image.tmdb.org/t/p/original/8.jpg",
    releaseDate: "1999-10-15",
    revenue: 100900000,
    imdbRating: 8.8,
  },
  {
    name: "Pulp Fiction",
    posterUrl: "https://image.tmdb.org/t/p/original/9.jpg",
    releaseDate: "1994-10-14",
    revenue: 213928762,
    imdbRating: 8.9,
  },
  {
    name: "The Shawshank Redemption",
    posterUrl: "https://image.tmdb.org/t/p/original/10.jpg",
    releaseDate: "1994-09-23",
    revenue: 28341469,
    imdbRating: 9.3,
  },
];

const reviews: Review[] = [
  { movieId: 1, comment: "Amazing movie, great concept." },
  { movieId: 1, comment: "Nolan at his best." },
  { movieId: 2, comment: "A visual masterpiece." },
  { movieId: 3, comment: "Best Batman film ever made." },
  { movieId: 3, comment: "Ledger was legendary." },
  { movieId: 4, comment: "Changed sci-fi forever." },
  { movieId: 5, comment: "Stunning visuals but meh story." },
  { movieId: 6, comment: "A classic love story." },
  { movieId: 7, comment: "Masterpiece of crime drama." },
  { movieId: 8, comment: "Disturbing and brilliant." },
];

export { movies, reviews };
