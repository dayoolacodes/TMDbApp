import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "./../styledElements";

const SearchMovies = ({
  searchedMovies,
  handleSetClickedMovie,
  handleFavMovie,
}) => {
  return (
    <>
      {searchedMovies.map((movie) => {
        return (
          <Container
            key={movie.id}
            onClick={() => handleSetClickedMovie(movie)}
          >
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
            <p style={{ textAlign: "center" }}>
              <b onClick={() => handleFavMovie(movie)}>
                {" "}
                <FaHeart color={"red"} /> Add to Favorite{" "}
              </b>
            </p>
          </Container>
        );
      })}
    </>
  );
};

export default SearchMovies;
