import React, { Component } from 'react';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { HEADER_LINKS } from '../../constants';

class Header extends Component {
  isActiveLink(isActive: boolean) {
    return isActive ? styles.activeLink : undefined;
  }

  render() {
    return (
      <header data-testid="header" className={styles.header}>
        <div className={styles.wrapper}>
          <nav className={styles.navLinks}>
            {HEADER_LINKS.map(({ name, path }, index) => {
              return (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) => this.isActiveLink(isActive)}
                  end
                >
                  {name}
                </NavLink>
              );
            })}
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
