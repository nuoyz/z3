import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'events'
import './index.css'
import App from './App'
import 'antd/dist/antd.css';
import registerServiceWorker from './registerServiceWorker'

window.rdEvent = new EventEmitter()
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
