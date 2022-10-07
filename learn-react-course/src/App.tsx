import React, { Component } from 'react';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main data-testid="app">
          <Outlet />
        </main>
      </>
    );
  }
}

export default App;
