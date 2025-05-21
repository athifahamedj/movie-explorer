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
   
  html, body, #root {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    overflow-x: hidden;  
  }

  body {
    color: ${({ theme }) => theme.text};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#f9f9f9" : "#222"};
    text-align: center;
    color: ${({ theme }) => theme.text};
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
    z-index: 1000;
  }

  .details-panel {
    background: ${({ theme }) =>
      theme.background === "#ffffff" ? "#fff" : "#333"};
    color: ${({ theme }) => theme.text};
    padding: 2rem;
    border-radius: 8px;
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
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
    color: ${({ theme }) => theme.text};
  }
`;
