import React from 'react';
import Header from './components/Header';
import PagesContainer from './pages/PagesContainer';
import Footer from './components/Footer';

import { Link } from 'react-router-dom';


function App() {
  
  return (
    <>
      <Header />
      <PagesContainer />
      <Footer />
    </>
  );
}

export default App;
