import React from "react";
import "./Movie.css";

const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props.movie;

  return (
    <div
      className="MovieContainer"
      onClick={() => {
        props.onMovieSelect(imdbID);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img className="CoverImage" alt={Title} src={Poster}></img>
      <div className="MovieName">Name :{Title}</div>
      <div className="InfoColumn">
        <div className="MovieInfo">Type :{Type}</div>
        <div className="MovieInfo">Year :{Year}</div>
      </div>
    </div>
  );
};

export default Movie;
