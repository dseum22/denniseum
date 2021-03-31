import React, { useState } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/analytics'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cello from './pages/Cello'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'

var firebaseConfig = {
  apiKey: "AIzaSyC8jc9VVwPEoKz7i9BAjK2cX0baguXgu-8",
  authDomain: "denniseum-4b16e.firebaseapp.com",
  projectId: "denniseum-4b16e",
  storageBucket: "denniseum-4b16e.appspot.com",
  messagingSenderId: "423578505617",
  appId: "1:423578505617:web:4f79a4147e04bef5dbca30",
  measurementId: "G-YPRR1BW97B"
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className='flex flex-col justify-between min-h-screen'>
          <Header />
          <main className='mt-6 md:mt-8 flex-grow'>
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/projects'>
                <Projects />
              </Route>
              <Route path='/cello'>
                <Cello />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
