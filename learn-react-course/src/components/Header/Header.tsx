import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { routes } from '../../router/routes';

class Header extends Component {
  isActiveLink(isActive: boolean) {
    return isActive ? styles.activeLink : undefined;
  }

  render() {
    return (
      <header data-testid="header" className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navLinks}>
            <NavLink to={routes.main} className={({ isActive }) => this.isActiveLink(isActive)} end>
              Home
            </NavLink>
            <NavLink to={routes.aboutUs} className={({ isActive }) => this.isActiveLink(isActive)}>
              About Us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
