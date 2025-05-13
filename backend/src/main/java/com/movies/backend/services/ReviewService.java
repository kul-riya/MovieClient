package com.movies.backend.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movies.backend.entities.Movie;
import com.movies.backend.entities.Review;
import com.movies.backend.repositories.MovieRepository;
import com.movies.backend.repositories.ReviewRepository;

@Service
public class ReviewService {

    // @Autowired
    // private final ReviewRepository reviewRepository;
    @Autowired
    private final MovieRepository movieRepository;
    private final ReviewRepository reviewRepository;

    public ReviewService(MovieRepository movieRepository, ReviewRepository reviewRepository) {
        this.movieRepository = movieRepository;
        this.reviewRepository = reviewRepository;
    }

    public Optional<Review> getLatestReviewByComment(String comment) {
        return reviewRepository.findFirstByCommentOrderByCreatedDesc(comment);
    }

    public Review createReview(Review review) {
        Movie movie = movieRepository.findById(review.getMovieId()).orElseThrow(() -> new IllegalArgumentException("Movie not found with ID: " + review.getMovieId()));

        movie.getReviews().add(review);
        movieRepository.save(movie);
        Review savedReview = reviewRepository.save(review);
        return savedReview;

    }

}
