import React, { useEffect } from "react";
import { Container, LinkR, LinkWrapper } from "./../styledElements";

const Favorites = ({ favMovie, handleSetClickedMovie, handleDeleteFav }) => {
  const favoriteMovies = [...favMovie];

  useEffect(() => {}, []);

  return (
    <>
      {favoriteMovies.length ? (
        <h3>Your Favourites</h3>
      ) : (
        <h3> You have no favorites</h3>
      )}
      {favoriteMovies.map((movie) => {
        return (
          <Container
            key={movie.id}
            onClick={() => handleSetClickedMovie(movie)}
          >
            <LinkR to="/about">
              <img
                src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={`${movie.title}_img`}
              />
            </LinkR>
            <p>
              <b>Title:</b> {movie.title}
            </p>
            <p>
              <b>Release Date:</b> {movie.release_date}
            </p>
            <p>
              <b>Vote Average:</b> {movie.vote_average}
            </p>

            <p
              onClick={() => {
                handleDeleteFav(movie);
              }}
              style={{ textAlign: "center" }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                ></path>
              </svg>
            </p>
          </Container>
        );
      })}

      <LinkWrapper>
        <LinkR to="/">Go Back Home</LinkR>
      </LinkWrapper>
    </>
  );
};

export default Favorites;
