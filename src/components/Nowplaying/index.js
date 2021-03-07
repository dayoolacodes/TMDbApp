import { useState } from "react";
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
          <div style={{display:"flex", justifyContent:"center"}}>

            <Link to="/about">
              <img
                src={undefined ?? `https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                alt={`${movie.title}_img`}
                />
            </Link>
                </div>
            <p>
              <strong>Title:</strong> {movie.title}
            </p>
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <p>
              <strong>Vote Average:</strong> {movie.vote_average}
            </p>
            <p
              style={{ textAlign: "center" }}
              onClick={() => handleFavMovie(movie)}
            >
              <strong style={{cursor:"pointer"}}>
                <FaHeart color={"red"} /> Add to Favorite{" "}
              </strong>
            </p>
          </Container>
        );
      })}
    </>
  );
};

export default Nowplaying;
