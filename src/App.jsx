//API---> https://www.omdbapi.com/

import { useState } from "react";
// import Axios from "axios";
import Movie from "./components/Movie";
import "./components/App.css";
import SelectedMovie from "./components/SelectedMovie";
const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [timeOutId, setTimeOutId] = useState();
  const [searchQuery, setSearchQuery] = useState();
  const [selectedMovie, onMovieSelect] = useState();
  const [error, setError] = useState(false);

  const fetchData = (searchString) => {
    setError(false);
    fetch(`http://www.omdbapi.com/?s=${searchString}&apikey=5b18b779`)
      .then((responce) => responce.json())
      .then((result) => {
        if (result.Error) {
          setError(true);
        }
        setMovieList(result.Search);
      });
  };

  // const fetchData = async (searchString) => {
  //   const response = await Axios.get(
  //     `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
  //   );
  //   updateMovieList(response.data.Search);
  // };

  const onTextChange = (e) => {
    onMovieSelect("");
    clearTimeout(timeOutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeOutId(timeout);
  };

  return (
    <div className="Container">
      <div className="Header">
        <div className="AppName">
          <img alt="" src="/icon.png" className="MovieImage " />
          Movie App
        </div>
        <div className="SearchBox">
          <img
            alt="Not found"
            src="/search-icon.png"
            className="SearchIcon "
          ></img>
          <input
            className="SearchInput"
            placeholder="Search Movie"
            value={searchQuery}
            onChange={onTextChange}
          ></input>
        </div>
      </div>
      {selectedMovie && (
        <SelectedMovie
          selectedMovie={selectedMovie}
          onMovieSelect={onMovieSelect}
        />
      )}

      <div className="MovieListContainer">
        {movieList?.length ? (
          movieList.map((movie, index) => (
            <Movie key={index} movie={movie} onMovieSelect={onMovieSelect} />
          ))
        ) : error ? (
          <p className="msg_not_found">No data found ..Plese try again !</p>
        ) : (
          <p className="msg_to_search">start searching now ..!</p>
        )}
      </div>
    </div>
  );
};

export default App;
