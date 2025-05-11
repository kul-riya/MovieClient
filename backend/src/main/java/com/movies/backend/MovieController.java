package com.movies.backend;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.movies.backend.entities.Movie;
import com.movies.backend.services.MovieService;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieService.findAllMovies(), HttpStatus.OK);
    }

    @GetMapping("/{movieId}")
    public ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable Long movieId) {
        return new ResponseEntity<>(movieService.findMovieById(movieId), HttpStatus.OK);
    }

    @PostMapping
    public void postNewMovie(@RequestBody Movie movie) {
        movieService.addMovie(movie);
    }

}
