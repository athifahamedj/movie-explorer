import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, lightTheme, darkTheme } from './theme';

describe('GlobalStyle', () => {
  test('applies light theme styles correctly', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <>
          <GlobalStyle />
          <div>Test Content</div>
        </>
      </ThemeProvider>
    );
 
    expect(container.firstChild).toHaveStyleRule('background-color', lightTheme.background, {
      modifier: 'html, body, #root',
    });
 
    expect(container.firstChild).toHaveStyleRule('color', lightTheme.text, {
      modifier: 'body',
    });
  });

  test('applies dark theme styles correctly', () => {
    const { container } = render(
      <ThemeProvider theme={darkTheme}>
        <>
          <GlobalStyle />
          <div>Test Content</div>
        </>
      </ThemeProvider>
    );
 
    expect(container.firstChild).toHaveStyleRule('background-color', darkTheme.background, {
      modifier: 'html, body, #root',
    });
 
    expect(container.firstChild).toHaveStyleRule('color', darkTheme.text, {
      modifier: 'body',
    });
  });
});
