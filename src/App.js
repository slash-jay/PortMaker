import React, { useState, useEffect } from 'react';
import Template from './Template';
import Instructions from './Instructions';
import Footer from './Footer';
import './App.css';

function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    // Check if user has scrolled to the bottom of the page
    const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    setShowFooter(isAtBottom);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <Template />
        <Instructions />
      </div>
      {showFooter && <Footer />} {/* Conditionally render the Footer */}
    </div>
  );
}

export default App;
