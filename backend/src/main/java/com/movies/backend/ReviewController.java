package com.movies.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.movies.backend.entities.Review;
import com.movies.backend.services.ReviewService;

@RequestMapping("api/reviews")
@Controller
public class ReviewController {

    @Autowired
    private final ReviewService service;

    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<Review> postNewReview(@RequestBody Review review) {

        try {
            return new ResponseEntity<>(service.createReview(review), HttpStatus.CREATED);
        } catch (NumberFormatException e) {
            System.out.println("Invalid movie id");
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
