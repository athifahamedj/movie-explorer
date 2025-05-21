import React from 'react';
import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const Modal = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  padding: 2rem;
  position: relative;

  @media (max-width: 480px) {
    padding: 1rem;
    max-width: 90vw;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
`;

function MovieDetails({ movie, onClose }) {
  
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close popup">&times;</CloseButton>
        <h2>{movie.Title}</h2>
        <p><strong>Year:</strong> {movie.Year}</p>
        {movie.Genre && <p><strong>Genre:</strong> {movie.Genre}</p>}
        {movie.Plot && <p><strong>Plot:</strong> {movie.Plot}</p>}
        <a
          href={`https://www.imdb.com/title/${movie.imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          View on IMDb
        </a>
      </Modal>
    </Overlay>
  );
}

export default MovieDetails;
