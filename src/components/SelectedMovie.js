import React ,{useState,useEffect} from 'react';
import '../css/SelectedMovie.css'
const SelectedMovie = (props) => {
    const API_KEY="5b18b779"
    const [movieInfo, setMovieInfo] = useState();
    const {selectedMovie}=props
    useEffect(() => {
        
        fetch(
          `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => response.json())
        .then(data=>setMovieInfo(data))
      }, [selectedMovie]);
    
    return (
        <div className="selected-Container" >
      {movieInfo ? (
        <>
          <img className="CoverImage"  src={movieInfo?.Poster} alt={movieInfo?.Title} />
          <div className="InfoColumn" >
            <div className="MovieName" >
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
            </div>
            <div className="MovieInfo" >
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
            </div>
            <div className="MovieInfo" >
              Year: <span>{movieInfo?.Year}</span>
            </div>
            <div className="MovieInfo" >
              Language: <span>{movieInfo?.Language}</span>
            </div>
            <div className="MovieInfo">
              Rated: <span>{movieInfo?.Rated}</span>
            </div>
            <div className="MovieInfo">
              Released: <span>{movieInfo?.Released}</span>
            </div>
            <div className="MovieInfo">
              Runtime: <span>{movieInfo?.Runtime}</span>
            </div>
            <div className="MovieInfo">
              Genre: <span>{movieInfo?.Genre}</span>
            </div>
            <div className="MovieInfo">
              Director: <span>{movieInfo?.Director}</span>
            </div>
            <div className="MovieInfo">
              Actors: <span>{movieInfo?.Actors}</span>
            </div>
            {/* <div className="MovieInfo">
              Plot: <span>{movieInfo?.Plot}</span>
            </div> */}
          </div>
          <button className="Close" onClick={() => props.onMovieSelect()}>X</button>
        </>
      ) : (
        "Loading..."
      )}
    </div>
    );
};

export default SelectedMovie;