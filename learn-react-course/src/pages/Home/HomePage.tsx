import React, { Component } from 'react';
import { SearchBar } from '../../components/SearchBar';
import styles from './HomePage.module.scss';
import { goodsData } from '../../data';
import { CardList } from '../../components/CardList';

class HomePage extends Component {
  render() {
    return (
      <section data-testid="home-page">
        <header className={styles.header}>
          <h1>Home Page</h1>
          <SearchBar />
        </header>
        <CardList goods={goodsData} />
      </section>
    );
  }
}

export default HomePage;
