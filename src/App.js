import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import { GlobalStyleFont } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <GlobalStyle />
        <GlobalStyleFont />
        <Provider store={store}>
        	<Header />
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
