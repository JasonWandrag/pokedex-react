import React, { Component } from 'react';
import Header from './components/Header';
import Itemlist from './components/Itemlist';
import Display from './components/Display';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Itemlist />
        <header className="App-header">
          <Header branding="Pokemon Information Center"/>
        </header>
          <Display />
      </div>
      </Provider>
    );
  }
}

export default App;
