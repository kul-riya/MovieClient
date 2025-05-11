package com.movies.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.movies.backend.entities.Review;

@Repository
public interface ReviewRepository extends JpaRepository<Review, Long> {

}
