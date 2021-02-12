import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Resume from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <div className='container-custom'>
        <Header />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
