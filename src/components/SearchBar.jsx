import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 3rem 26rem; /* top-bottom: 3rem, left-right: 26rem */
  display: flex;
  justify-content: center;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.background === '#ffffff' ? '#f1f1f1' : '#1e1e1e'};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;


const Input = styled.input`
  flex: 1;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function SearchBar({ query, setQuery, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch(query);
  };

  return (
    <Wrapper>
      <Card>
        <Input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Search movies"
        />
        <Button onClick={() => onSearch(query)}>Search</Button>
      </Card>
    </Wrapper>
  );
}

export default SearchBar;
