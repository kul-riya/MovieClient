package com.movies.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.backend.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
}
