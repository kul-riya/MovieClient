package com.movies.backend;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.movies.backend.entities.Movie;
import com.movies.backend.entities.Review;
import com.movies.backend.services.MovieService;
import com.movies.backend.services.ReviewService;

@Component
public class DataLoader implements CommandLineRunner {

    private final MovieService movieService;
    private final ReviewService reviewService;
    private final Random random = new Random();

    public DataLoader(MovieService movieService, ReviewService reviewService) {
        this.movieService = movieService;
        this.reviewService = reviewService;
    }

    @Override
    public void run(String... args) {
        // Only load data if the movie table is empty
        if (movieService.findAllMovies().isEmpty()) {
            loadMovieData();
        }
    }

    private void loadMovieData() {
        List<Movie> movies = new ArrayList<>();

        // Sample movie data
        movies.add(createMovie("The Shawshank Redemption", "1994-09-23", 2834L, 9.3,
                "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"));

        movies.add(createMovie("The Godfather", "1972-03-24", 1397L, 9.2,
                "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"));

        movies.add(createMovie("The Dark Knight", "2008-07-18", 100597L, 9.0,
                "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"));

        movies.add(createMovie("The Godfather Part II", "1974-12-20", 5730L, 9.0,
                "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"));

        movies.add(createMovie("12 Angry Men", "1957-04-10", 436L, 9.0,
                "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"));

        movies.add(createMovie("Schindler's List", "1993-12-15", 32220L, 8.9,
                "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"));

        movies.add(createMovie("The Lord of the Rings: The Return of the King", "2003-12-17", 114603L, 8.9,
                "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"));

        movies.add(createMovie("Pulp Fiction", "1994-10-14", 21393L, 8.9,
                "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"));

        movies.add(createMovie("The Lord of the Rings: The Fellowship of the Ring", "2001-12-19", 88785L, 8.8,
                "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"));

        movies.add(createMovie("Inception", "2010-07-16", 83684L, 8.8,
                "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"));

        // Save movies to database
        for (Movie movie : movies) {
            Movie savedMovie = movieService.addMovie(movie);

            // Add 1-3 reviews for each movie
            addReviewForMovie(Long.valueOf(movies.indexOf(movie) + 1));

            System.out.println("Added movie: " + savedMovie.getName() + " with 1 reviews");
        }

        System.out.println("Database populated with 10 movies and reviews!");
    }

    private Movie createMovie(String name, String releaseDateStr, Long revenue, double imdbRating, String posterUrl) {
        Movie movie = new Movie();
        movie.setName(name);
        movie.setReleaseDate(LocalDate.parse(releaseDateStr));
        movie.setRevenue(revenue);
        movie.setImdbRating(imdbRating);
        movie.setPosterUrl(posterUrl);
        return movie;
    }

    private void addReviewForMovie(Long movie_id) {
        Review review = new Review();
        review.setMovieId(movie_id); // Assuming getId() returns the movie's ID

        // Example review comments
        String[] reviewComments = {
            "Absolutely brilliant movie! One of the best I've ever seen.",
            "Great performances by the entire cast. Would recommend.",
            "A true classic that stands the test of time.",
            "The cinematography and direction were outstanding.",
            "Not as good as I expected, but still worth watching.",
            "This film changed my perspective on cinema.",
            "A masterpiece that deserves all its acclaim.",
            "Engaging story with unexpected twists.",
            "The score and visuals complement each other perfectly.",
            "An emotional journey from start to finish."
        };

        review.setComment(reviewComments[random.nextInt(reviewComments.length)]);

        reviewService.createReview(review);
    }
}
