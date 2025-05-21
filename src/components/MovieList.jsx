import React from 'react';
import styled from 'styled-components';
export const MovieListWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  width: 100%;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.text};
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const MovieCard = styled.div`
  flex: 0 0 150px;
  cursor: pointer;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: ${({ theme }) => theme.background === '#ffffff' ? '#f9f9f9' : '#222'};
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;



function MovieList({ movies, onSelectMovie }) {
  return (
    <MovieListWrapper>
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
   </MovieListWrapper>
  );
}

export default MovieList;