import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/app'
import 'firebase/analytics'
import App from './App'

// fetch('/__/firebase/init.json').then(async response => {
//   firebase.initializeApp(await response.json())
//   firebase.analytics()
// })

var firebaseConfig = {
  apiKey: "AIzaSyCvFlvF9QFjt8hVn08d3R47yMWUPSKrLO4",
  authDomain: "denniseum-4b16e.firebaseapp.com",
  projectId: "denniseum-4b16e",
  storageBucket: "denniseum-4b16e.appspot.com",
  messagingSenderId: "423578505617",
  appId: "1:423578505617:web:0f0434630233361edbca30",
  measurementId: "G-WM0DKQPKP5"
};
firebase.initializeApp(firebaseConfig)
firebase.analytics()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
