import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import PagesContainer from './pages/PagesContainer';
import Footer from './components/Footer';

import { Link } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <Header />
      <div className='container pt-4'>
        <PagesContainer />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
