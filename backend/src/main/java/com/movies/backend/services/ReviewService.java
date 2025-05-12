package com.movies.backend.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies.backend.entities.Movie;
import com.movies.backend.entities.Review;
import com.movies.backend.repositories.MovieRepository;

@Service
public class ReviewService {

    // @Autowired
    // private final ReviewRepository reviewRepository;
    @Autowired
    private final MovieRepository movieRepository;

    public ReviewService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
        // this.reviewRepository = reviewRepository;
    }

    public Review createReview(String comment, Long movie_id) {
        Movie movie = movieRepository.findById(movie_id).orElseThrow(() -> new IllegalArgumentException("Movie not found with ID: " + movie_id));
        Review newReview = new Review(movie_id, comment, LocalDateTime.now(), LocalDateTime.now());

        movie.getReviews().add(newReview);
        movieRepository.save(movie);

        return newReview;

    }

}
