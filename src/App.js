
import './App.css';
// import Fetchdata from './components/Fetchdata;
import Login from './components/login/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./Sass/main.scss"
import { useState } from 'react';
import About from './components/About';
import Banner from './components/Banner';
import Contact from './Contact/Contact';
import Homepage from './components/Homepage/Homepage';

function App() {
  return (
    <div>
        <Navbar />
         {/* <Header /> */}
         <Homepage/>
          
          {/* <Contact/> */}
        {/* <Login/> */}
        <Footer /> 
         {/* <About/>  */}

    </div>
  );
}

export default App;
