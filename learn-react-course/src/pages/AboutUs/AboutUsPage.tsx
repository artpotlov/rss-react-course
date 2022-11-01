import React from 'react';

type TProps = {
  dataTestId?: string;
};

export const AboutUsPage = ({ dataTestId }: TProps) => {
  return (
    <section data-testid={dataTestId || 'about-us-page'}>
      <h1>About us page</h1>
      <p>This is the about us page</p>
    </section>
  );
};
