import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/analytics'
import App from './App'

fetch('/__/firebase/init.json').then(async response => {
  firebase.initializeApp(await response.json())
  firebase.analytics()
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
