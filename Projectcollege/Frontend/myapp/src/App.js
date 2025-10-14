
import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import {Bounce, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Faculty from './pages/Faculty';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import FloatingContactButtons from './Components/FloatingContactButtons';
import EnquiryButton from './Components/EnquiryButton';
import { useEffect } from 'react';
import ReactGA from "react-ga4";







function App() {

   useEffect(() => {
    ReactGA.initialize("G-3HFKN7S0BS"); // replace with your ID
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (

    <div>
    <Router> 
      <ToastContainer theme='dark' transition={Bounce} position='top-center' />
      <Navigation />
        <FloatingContactButtons />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>  
    </div>
  );
}

export default App;
