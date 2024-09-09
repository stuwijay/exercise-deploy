import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders HomePage when path is /', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText('Why do we need Test ?')).toBeInTheDocument();
    expect(screen.getByText('To guarantee our code quality. And to show the people that we also care about it and wish to give something that already proven, at least by ourself')).toBeInTheDocument();
  });

  test('renders UserPage when path is /users', () => {
    render(
      <BrowserRouter initialEntries={['/users']}>
        <App />
      </BrowserRouter>
    );

    expect(screen.getByText('Users List')).toBeInTheDocument();
  });
});
