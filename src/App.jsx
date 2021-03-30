import React, { useState } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cello from './pages/Cello'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='flex flex-col justify-between min-h-screen'>
          <Header />
          <main className='mt-10 md:mt-12 flex-grow'>
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
