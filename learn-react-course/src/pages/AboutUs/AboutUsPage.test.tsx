import React from 'react';
import { render, screen } from '@testing-library/react';
import { AboutUsPage } from './index';

describe('About us page tests:', () => {
  it('page mounted ', () => {
    render(<AboutUsPage />);
    expect(screen.getByText(/^About Us/i)).toBeInTheDocument();
  });
});
