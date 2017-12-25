import React, {Component} from 'react'
import Menu from './menu'
import moment from 'moment'
import DiariesList from './diariesList'
import Diary from './diary'
import './App.css'

moment.locale('zh-cn')

class App extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          // flexDirection: 'row',
          overflowX: 'hidden',
          overflowY: 'hidden', //test
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: '#ffffff'
        }}
      >
        <Menu />
        <DiariesList />
        <Diary />
      </div>
    )
  }
}

export default App
