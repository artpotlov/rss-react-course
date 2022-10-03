import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  isActiveLink(isActive: boolean) {
    return isActive ? styles.activeLink : undefined;
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navLinks}>
            <NavLink to="/" className={({ isActive }) => this.isActiveLink(isActive)} end>
              Home
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => this.isActiveLink(isActive)}>
              About Us
            </NavLink>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
