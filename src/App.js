import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import firebase from 'firebase/app';
import 'firebase/analytics';

function App() {
  firebase.initializeApp();
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-grow'>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/resume' exact component={Resume}></Route>
            <Route path='/portfolio' exact component={Portfolio}></Route>
            <Route path='/contact' exact component={Contact}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
