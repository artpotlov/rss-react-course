import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutUsPage } from '../index';

describe('About us page tests', () => {
  it('the page mounted ', () => {
    render(<AboutUsPage dataTestId="about-us-page" />);
    expect(screen.getByTestId('about-us-page')).toBeInTheDocument();
  });
});
