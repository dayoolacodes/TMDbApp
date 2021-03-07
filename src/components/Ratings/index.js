import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Input } from "./RatingElements";

const Rating = ({ movie, baseUrl, apiKey }) => {
  const [ratingVal, setRatingVal] = useState(null);

  const postRating = async (e) => {
    setRatingVal(e);
    const data = {
      value: e * 2,
    };
    // await axios.post(`https://api.themoviedb.org/3/movie/${movie.id}/rating?api_key=a5babee5a188ccf49db8c5cad0da7bf6`, data)
    // .then((resp)=>{
    //     console.log(resp)
    // })

    await fetch(
      `${baseUrl}${movie.id}/rating?api_key=${apiKey}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    ).then((resp) => {
      // console.log(resp);
      alert("Your Rating Has Been Submitted");
    });
  };

  return (
    <>
      {[1, 2, 3, 4, 5].map((e) => (
        <label key={e}>
          <Input
            type="radio"
            name="rating"
            value={e}
            onClick={() => {
              postRating(e);
            }}
          />
          <FaStar color={e <= ratingVal ? "#EA8B20" : "gray"} style={{cursor: "pointer"}} />
        </label>
      ))}
    </>
  );
};

export default Rating;
