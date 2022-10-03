import React, { Component } from 'react';
import { Header } from './components/Header';
import { Outlet } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default App;
