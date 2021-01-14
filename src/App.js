import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {
  Button,
  Form,
  Input,
} from "./components/styledElements";
import AboutMovie from "./components/AboutMovie";
import Favorites from "./components/FavoriteMovies";
import SearchMovies from "./components/SearchMovies";
import Nowplaying from "./components/Nowplaying";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [clickedMovie, setClickedMovie] = useState([]);
  const [query, setQuery] = useState("");
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [favMovie, setFavMovie] = useState([]);
  const [clickedFav, setClickedFav] = useState(false);

  const baseUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "a5babee5a188ccf49db8c5cad0da7bf6";
  

  useEffect(() => {
     let controller = new AbortController();
    async function fetchNowplayingMovies() {
      try {
        const url = `${baseUrl}now_playing?api_key=${apiKey}&language=en-US&page=1`;
        const res = await fetch(url, { signal: controller.signal });
        const data = await res.json();
        setMovies(data.results);

        const getGenreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;
        const genreRes = await fetch(getGenreUrl, {
          signal: controller.signal
        });
        const genreData = await genreRes.json();
        setGenreList(genreData);

        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;
        if (query) {
          const searchRes = await fetch(searchUrl, {
            signal: controller.signal
          });
          const searchedData = await searchRes.json();
          setSearchedMovies(searchedData.results);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchNowplayingMovies();

    return ()=> {
      controller.abort();
    }
  }, [query, clickedMovie]);

  const handleFavMovie = (m) => {
    let newMovieAdded = true
    const newFavMovie = [...favMovie, m];
    // eslint-disable-next-line array-callback-return
    Object.values(favMovie).map((e) => {
      if (e.id === m.id) {
        newMovieAdded = false
        newFavMovie.pop();
        alert("movie already in favorites");
      }
    });
    if(newMovieAdded)
    alert("movie added to favorites");
    setFavMovie(newFavMovie);
    setClickedFav(!clickedFav);
  };

  const handleSetClickedMovie = (m) => {
    setClickedMovie(m);
  };

  const handleDeleteFav = (movie) => {
    const filteredMovie = favMovie.filter((e) => {
      return e.id !== movie.id;
    });
    alert("movie deleted!");
    setFavMovie(filteredMovie);
  };

  return (
    <Router>
      <div className="container">

        <Header />

        <Switch>
          <Route path="/favorites" >
            <Favorites
              favMovie={favMovie}
              setClickedMovie={setClickedMovie}
              handleSetClickedMovie={handleSetClickedMovie}
              handleDeleteFav={handleDeleteFav}
            />
          </Route>

          <Route path="/about" >
            
              <AboutMovie
                movie={clickedMovie}
                genreList={genreList}
                handleFavMovie={handleFavMovie}
                baseUrl={baseUrl}
                apiKey={apiKey}
              />
          
          </Route>

          <Route path="/" >
            <Form>
              <Input
                type="text"
                name="query"
                value={query}
                placeholder="Search Movies..."
                onChange={(e) => setQuery(e.target.value)}
              />

              {searchedMovies.length > 0 ? (
                <Button 
                onClick={() => window.location.reload()}>
                  Cancel Search
                </Button>
              ) : (
                " "
              )}
            </Form>
            <SearchMovies
              searchedMovies={searchedMovies}
              handleSetClickedMovie={handleSetClickedMovie}
              handleFavMovie={handleFavMovie}
            />

            <Nowplaying
              movies={movies}
              handleSetClickedMovie={handleSetClickedMovie}
              handleFavMovie={handleFavMovie}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
