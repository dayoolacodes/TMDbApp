import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../Nowplaying/NowplayingElements";

const RecommendedMovies = ({ recommendedMovies, handleAbtMov }) => {
  return (
    <>
      {recommendedMovies.results.length > 0 ? (
        <h2>Recommended Movies</h2>
      ) : (
        <h2> No Recommended Movies for this Movie</h2>
      )}
      
      {recommendedMovies.results.map((movie) => {
        return (
          <Container key={movie.id} onClick={() => handleAbtMov(movie)}>
            <Link to="/about">
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={`${movie.title}_img`}
              />
            </Link>
            <p>
              <b>Title:</b> {movie.title}
            </p>
            <p>
              <b>Release Date:</b> {movie.release_date}
            </p>
            <p>
              <b>Vote Average:</b> {movie.vote_average}
            </p>
          </Container>
        );
      })}
    </>
  );
};

export default RecommendedMovies;
