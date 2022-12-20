import React from 'react';
import Header from './components/Header';
import PagesContainer from './components/pages/PagesContainer';
// import Footer from './components/Footer';


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  
  return (
    <>
      <Header />
      <PagesContainer />

      {/* <Footer /> */}
    </>
  );
}

export default App;
