import React, { useState } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
