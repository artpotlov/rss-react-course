import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.scss';
import { routes } from '../../router/routes';

class ErrorPage extends Component {
  render() {
    return (
      <div data-testid="error-page" className={styles.error}>
        <div>
          <h1>404</h1>
          <p>page not found...</p>
          <Link to={routes.main}>Go home</Link>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
