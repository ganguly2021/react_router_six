import React from 'react'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home'
import Login from './components/Login/Login'

function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Login />
     <Footer />
   </React.Fragment>
  );
}

export default App;
