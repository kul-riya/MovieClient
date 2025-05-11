package com.movies.backend.entities;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Review")
@Table(name = "review")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @SequenceGenerator(name = "review_sequence")
    @GeneratedValue(generator = "review_sequence", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "movie_id")
    private Long movieId;
    private String comment;

    private LocalDateTime created;
    private LocalDateTime updated;

    public Review(Long movieId, String comment, LocalDateTime created, LocalDateTime updated) {
        this.movieId = movieId;
        this.comment = comment;
        this.created = created;
        this.updated = updated;
    }

}
