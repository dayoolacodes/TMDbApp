import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import Rating from "../Ratings";
import RecommendedMovies from "../RecommendedMovies";

const AboutMovie = ({ movie, genreList, handleFavMovie, apiKey, baseUrl }) => {
  const [abtMov, setAbtMov] = useState(movie);
  const [actors, setActors] = useState({});
  const [recommendedMovies, setRecommendedMovies] = useState({});

  const handleAbtMov = (e) => {
    setAbtMov(e);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    let controller = new AbortController();

    const fetchUrl = async () => {
      const url = `${baseUrl}${abtMov.id}/credits?api_key=${apiKey}`;
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();

      setActors({ data });

      const recommendedMoviesFetchUrl = `${baseUrl}${abtMov.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
      const recommendedMoviesRes = await fetch(recommendedMoviesFetchUrl, {
        signal: controller.signal,
      });
      const recommendedMoviesData = await recommendedMoviesRes.json();
      setRecommendedMovies({ recommendedMoviesData });
    };
    fetchUrl();

    return () => {
      controller.abort();
    };
  }, [abtMov.id, baseUrl, apiKey]);

  return abtMov.title ? (
    <div>
      <img
        src={`https://image.tmdb.org/t/p/w300/${abtMov.poster_path}`?? "undefined"}
        alt={`${abtMov.title}_img`}
      />
      <h2 style={{ color: "#EA8B20" }}>{abtMov.title}</h2>
      <p>
        <strong>Year of Release:</strong> {abtMov.release_date.slice(0, 4)}
      </p>
      <p>
        <strong>Overview:</strong> {abtMov.overview}
      </p>
      <p>
        <strong>Genres:</strong>{" "}
        {abtMov.genre_ids.map((e) => {
          return genreList.genres.map((m) => {
            return e === m.id ? m.name + " " : null;
          });
        })}
      </p>
      <p>
        <strong>Rating:</strong> {abtMov.vote_average}
      </p>
      <strong style={{ margin: 0 }}>Rate Movie: </strong>
      <Rating movie={abtMov} baseUrl={baseUrl} apiKey={apiKey} />
      <p style={{ textAlign: "center" }}>
        <strong style={{cursor:"pointer"}} onClick={() => handleFavMovie(abtMov)}>
          <FaHeart color={"red"} /> Add to Favorite{" "}
        </strong>
      </p>
      <p style={{ marginTop: "20px" }}>
        <strong>Actors : </strong>
      </p>
      {
        <table border={1} cellPadding={9} style={{ border: "none" }}>
          <thead>
            <tr>
              <td>
                <strong>Name</strong>
              </td>
              <td>
                <strong>Character</strong>
              </td>
            </tr>
          </thead>
          <tbody>
            {actors.data
              ? actors.data.cast.map((e, i) => (
                  <tr key={i}>
                    <td>{e.name}</td>
                    <td>{e.character}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      }
      {recommendedMovies.recommendedMoviesData ? (
        <RecommendedMovies
          recommendedMovies={recommendedMovies.recommendedMoviesData}
          handleAbtMov={handleAbtMov}
        />
      ) : null}
    </div>
  ) : (
    <h4 style={{ textAlign: "center" }}>Oops Data Lost!</h4>
  );
};

export default AboutMovie;
