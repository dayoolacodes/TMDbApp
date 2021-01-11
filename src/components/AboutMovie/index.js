import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LinkR, LinkWrapper } from "./../styledElements";
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
    const fetchUrl = async () => {
      const url = `${baseUrl}${abtMov.id}/credits?api_key=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      
      setActors({ data });

      const recommendedMoviesFetch = `${baseUrl}${abtMov.id}/recommendations?api_key=${apiKey}&language=en-US&page=1`;
      const recommendedMoviesRes = await fetch(recommendedMoviesFetch);
      const recommendedMoviesData = await recommendedMoviesRes.json();
      setRecommendedMovies({ recommendedMoviesData });
    };
    fetchUrl();
  }, [abtMov.id, baseUrl, apiKey]);

  try {
    return (
      <>
        <img
          src={`https://image.tmdb.org/t/p/w300/${abtMov.poster_path}`}
          alt={`${abtMov.title}_img`}
        />
        <h2 style={{ color: "#EA8B20" }}>{abtMov.title}</h2>
        <p>
          <b>Year of Release:</b> {abtMov.release_date.slice(0, 4)}
        </p>
        <p>
          <b>Overview:</b> {abtMov.overview}
        </p>
        <p>
          <b>Genres:</b>{" "}
          {abtMov.genre_ids.map((e) => {
            return genreList.genres.map((m) => {
              return e === m.id ? m.name + " " : null;
            });
          })}
        </p>
        <p>
          <b>Rating:</b> {abtMov.vote_average}
        </p>

        <b style={{ margin: 0 }}>Rate Movie: </b>
        <Rating movie={abtMov} baseUrl={baseUrl} apiKey={apiKey} />
        <p style={{ textAlign: "center" }}>
          <b onClick={() => handleFavMovie(abtMov)}>
            <FaHeart color={"red"} /> Add to Favorite{" "}
          </b>
        </p>
        <p style={{ marginTop: "20px" }}>
          <b>Actors : </b>
        </p>
        {
          <table border={1} cellPadding={9} style={{ border: "none" }}>
            <thead>
              <tr>
                <td>
                  <b>Name</b>
                </td>
                <td>
                  <b>Character</b>
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
        <LinkWrapper>
          <LinkR to="/">Go Back Home</LinkR>
        </LinkWrapper>
        {recommendedMovies.recommendedMoviesData ? (
          <RecommendedMovies
            recommendedMovies={recommendedMovies.recommendedMoviesData}
            handleAbtMov={handleAbtMov}
          />
        ) : null}
      </>
    );
  } catch (err) {
    console.error(err);
    window.location = "/";
  }
};

export default AboutMovie;
