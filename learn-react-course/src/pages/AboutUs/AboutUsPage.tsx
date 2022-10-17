import React from 'react';

type TProps = {
  dataTestId?: string;
};

const AboutUsPage: React.FC<TProps> = ({ dataTestId }) => {
  return (
    <section data-testid={dataTestId}>
      <h1>About us page</h1>
      <p>This is the about us page</p>
    </section>
  );
};

AboutUsPage.defaultProps = { dataTestId: 'about-us-page' };

export default AboutUsPage;
