import React from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './theme';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;     
  padding: 2rem;
`;

const ThemeWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;

function App() {
  const [query, setQuery] = React.useState('');
  const [movies, setMovies] = React.useState([]);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [theme, setTheme] = React.useState(localStorage.getItem('theme') || 'light');

  React.useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const fetchMovies = async (q) => {
    if (!q) return;
    const res = await fetch(`https://www.omdbapi.com/?apikey=844eeec0&s=${q}`);
    const data = await res.json();
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <AppContainer>
        <ThemeWrapper>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </ThemeWrapper>
        <SearchBar onSearch={fetchMovies} setQuery={setQuery} query={query} />
        <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
        {selectedMovie && (
          <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
        )}
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
