import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App tests', () => {
  it('render home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainElement = document.querySelector<HTMLElement>('main');
    expect(mainElement).toBeTruthy();
  });
});
