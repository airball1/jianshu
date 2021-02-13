import React, { Component } from 'react';
import { GlobalStyle } from './style.js'
import { GlobalStyleFont } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <GlobalStyle />
        <GlobalStyleFont />
        <Provider store={store}>
        	<BrowserRouter>
        		<div>
              <Header />
	        		<Route path= '/' exact component={Home}></Route>
	        		<Route path= '/detail' exact component={Detail}></Route>
        		</div>
        	</BrowserRouter>
        </Provider>
      </React.Fragment>
    );
  }
}

export default App;
