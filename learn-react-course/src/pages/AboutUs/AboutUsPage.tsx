import React from 'react';

type TProps = {
  dataTestId?: string;
};

const AboutUsPage = ({ dataTestId = 'about-us-page' }: TProps) => {
  return (
    <section data-testid={dataTestId}>
      <h1>About us page</h1>
      <p>This is the about us page</p>
    </section>
  );
};

export default AboutUsPage;
