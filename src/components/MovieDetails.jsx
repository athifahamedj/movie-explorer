import React, { useEffect } from 'react';

function MovieDetails({ movie, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="overlay" onClick={onClose}>
      <div className="details-panel" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close details">✖</button>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>IMDB ID:</strong> {movie.imdbID}</p>
        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieDetails;
