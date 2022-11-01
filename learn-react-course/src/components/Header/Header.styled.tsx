import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: white;
  border-bottom: 1px solid lavender;
`;

export const HeaderWrapper = styled.div`
  max-width: 1100px;
  height: 100%;
  margin-inline: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const HeaderNavLinks = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const HeaderNavLink = styled(NavLink)`
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
