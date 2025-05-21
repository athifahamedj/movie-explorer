import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

export const darkTheme = {
  background: "#121212",
  text: "#ffffff",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    margin: 0;
    font-family: sans-serif;
  }
 
  .app {
    padding: 1rem;
  }

  .movie-list {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .movie-card {
    cursor: pointer;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background: #f9f9f9;
    text-align: center;
  }

  .movie-card img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-panel {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    position: relative;
  }

  .details-panel button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;
