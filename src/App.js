import React from 'react'
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home'

function App() {
  return (
   <React.Fragment>
     <Navbar />
     <Home />
     <Footer />
   </React.Fragment>
  );
}

export default App;
