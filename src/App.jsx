import React, { useState } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cello from './pages/Cello'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import SocialMenu from './components/SocialMenu'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className='flex flex-col justify-between min-h-screen'>
          <Header />
          <main className='mt-6 md:mt-8 flex-grow'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/cello' component={Cello} />
              <Route path='/contact' component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
        <SocialMenu />
      </BrowserRouter>
    </>
  )
}

export default App
