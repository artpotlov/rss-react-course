import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';

class ErrorPage extends Component {
  render() {
    return (
      <div className={styles.error}>
        <div>
          <h1>404</h1>
          <p>page not found...</p>
          <Link to="/">Go home</Link>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
