import React from 'react';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../constants';
import styled from '@emotion/styled';

type TProps = {
  dataTestId?: string;
};

const Header: React.FC<TProps> = ({ dataTestId }) => {
  return (
    <HeaderContainer data-testid={dataTestId}>
      <Wrapper>
        <NavLinks>
          {HEADER_LINKS.map(({ name, path }, index) => {
            return (
              <CustomNavLink key={index} to={path} end={path === '/'}>
                {name}
              </CustomNavLink>
            );
          })}
        </NavLinks>
      </Wrapper>
    </HeaderContainer>
  );
};

Header.defaultProps = { dataTestId: 'header' };

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid lavender;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin-inline: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

const CustomNavLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: steelblue;
  }

  &.active {
    color: blue;
  }
`;
