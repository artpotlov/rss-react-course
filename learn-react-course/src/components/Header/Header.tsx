import React from 'react';
import { HEADER_LINKS } from '../../shared/constants';
import { HeaderContainer, HeaderNavLink, HeaderNavLinks, HeaderWrapper } from './Header.styled';

type TProps = {
  dataTestId?: string;
};

export const Header = ({ dataTestId }: TProps) => {
  return (
    <HeaderContainer data-testid={dataTestId}>
      <HeaderWrapper>
        <HeaderNavLinks>
          {HEADER_LINKS.map(({ name, path }, index) => {
            return (
              <HeaderNavLink key={index} to={path} end={path === '/'}>
                {name}
              </HeaderNavLink>
            );
          })}
        </HeaderNavLinks>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
