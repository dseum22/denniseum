import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import firebase from 'firebase/app'
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: "AIzaSyC8jc9VVwPEoKz7i9BAjK2cX0baguXgu-8",
  authDomain: "denniseum-4b16e.firebaseapp.com",
  projectId: "denniseum-4b16e",
  storageBucket: "denniseum-4b16e.appspot.com",
  messagingSenderId: "423578505617",
  appId: "1:423578505617:web:4f79a4147e04bef5dbca30",
  measurementId: "G-YPRR1BW97B"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
