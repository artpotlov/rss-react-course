import React, { Component } from 'react';
import { getSearchData, saveSearchData } from '../../utils/local-storage';
import styles from './SearchBar.module.scss';

type TProps = Record<string, never>;
type TState = {
  value: string;
};

class SearchBar extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props);
    const data = getSearchData();
    this.state = { value: data || '' };
  }

  componentWillUnmount() {
    saveSearchData(this.state.value);
  }

  onChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e) return;
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form className={styles.form}>
        <input
          data-testid="search-bar"
          type="search"
          placeholder="Search by..."
          className={styles.searchInput}
          value={this.state.value}
          onChange={this.onChange}
        />
        <button className={styles.submit}>Search</button>
      </form>
    );
  }
}

export default SearchBar;
