import React, { Component } from 'react';
import { getSearchData, saveSearchData } from '../../utils/localStorage';
import styles from './SearchBar.module.scss';

type TProps = Record<string, never>;
type TState = {
  value: string;
};

class SearchBar extends Component<TProps, TState> {
  state = {
    value: '',
  };

  constructor(props: TProps) {
    super(props);
    const data = getSearchData();
    if (data) this.state.value = data;
  }

  componentWillUnmount() {
    saveSearchData(this.state.value);
  }

  onChange(target: HTMLInputElement) {
    this.setState({ value: target.value });
  }

  render() {
    return (
      <form className={styles.form}>
        <input
          type="search"
          placeholder="Search by..."
          className={styles.searchInput}
          value={this.state.value}
          onChange={({ target }) => this.onChange(target)}
        />
        <button className={styles.submit}>Search</button>
      </form>
    );
  }
}

export default SearchBar;
