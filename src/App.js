import './App.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className='container-custom'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
