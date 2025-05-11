package com.movies.backend.entities;

import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "Movie")
@Table(name = "movie", uniqueConstraints = {
    @UniqueConstraint(name = "name_date_unique", columnNames = {"name", "release_date"})})
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Movie {

    @Id
    @SequenceGenerator(name = "movie_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "movie_sequence")
    private Long id;

    @Column(name = "name", columnDefinition = "TEXT")
    private String name;

    @Column(name = "release_date", columnDefinition = "DATE")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate releaseDate;

    private Long revenue;
    private Double imdbRating;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "movie_id", referencedColumnName = "id")
    private List<Review> reviews;

    public Movie(String name, LocalDate releaseDate, Long revenue, Double imdbRating) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.revenue = revenue;
        this.imdbRating = imdbRating;
    }

    public Movie(String name, LocalDate releaseDate, Long revenue, Double imdbRating, List<Review> reviews) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.revenue = revenue;
        this.imdbRating = imdbRating;
        this.reviews = reviews;
    }

}
