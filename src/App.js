import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios({
      method: 'get',
      url: `https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating`,
    });
    const movieList = movies.data.data.movies;
    this.setState({ movies: movieList, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader">
            <span> `Loading...`</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  genres={movie.genres}
                  year={movie.year}
                  rating={movie.rating}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default App;
