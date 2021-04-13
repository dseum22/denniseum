import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Cello from './pages/Cello'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import SocialMenu from './components/SocialMenu'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminLogin from './pages/admin/AdminLogin'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className='flex flex-col justify-between min-h-screen'>
          <Header />
          <main className='flex-grow mt-4 lg:mt-8'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/projects' component={Projects} />
              <Route path='/cello' component={Cello} />
              <Route exact path='/blog' component={Blog} />
              <Route path='/blog/:id' component={BlogPost} />
              <Route path='/contact' component={Contact} />
              <Route exact path='/admin'>
                <Redirect to='/admin/dashboard' />
              </Route>
              <Route path='/admin/dashboard' component={AdminDashboard} />
              <Route path='/admin/login' component={AdminLogin} />
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
