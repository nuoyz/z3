import React, { Component } from 'react';
import Menu from './menu';
import DiariesList from './diariesList';
import Diary from './diary';
import './App.css';

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          height: 880
        }}
      >
        <Menu/>
        <DiariesList/>
        <Diary/>
      </div>
    );
  }
}

export default App;
