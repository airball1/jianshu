import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
      </React.Fragment>
    );
  }
}

export default App;
