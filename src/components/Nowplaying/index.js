import React, { useState } from "react";
import { Select, SelectWrapper } from "./NowplayingElements";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Container } from "../styledElements";

const Nowplaying = ({ movies, handleSetClickedMovie, handleFavMovie }) => {
  const [order, setOrder] = useState(true);

  const orderedMovie = movies.sort((a, b) => {
    if (order) {
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      else if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      return 0;
    } else {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
      else if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
      return 0;
    }
  });

  return (
    <>
      <h2 style={{ textAlign: "center" }}>Now Playing</h2>
      <SelectWrapper>
        <div>
          <Select onChange={() => setOrder(!order)}>
            <option value="Asc">Ascending</option>
            <option value="Desc">Descending</option>
          </Select>
        </div>
      </SelectWrapper>
      {orderedMovie.map((movie) => {
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
            <p
              style={{ textAlign: "center" }}
              onClick={() => handleFavMovie(movie)}
            >
              <b>
                <FaHeart color={"red"} /> Add to Favorite{" "}
              </b>
            </p>
          </Container>
        );
      })}
    </>
  );
};

export default Nowplaying;
