import React from 'react';

function MovieList({ movies, onSelectMovie }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie-card"
          tabIndex="0"
          onClick={() => onSelectMovie(movie)}
          onKeyDown={(e) => e.key === 'Enter' && onSelectMovie(movie)}
          role="button"
          aria-pressed="false"
        >
          <img src={movie.Poster} alt={`${movie.Title} Poster`} />
          <h3>{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
}

export default MovieList;