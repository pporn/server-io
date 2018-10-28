import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Title from './Title';

import '../css/App.css';
import '../css/bulma.min.css';

function App() {
  return (
    <div className="Site">
      <div className="Site-content">
        <NavBar />
        <Title />
      </div>

      <Footer />
    </div>
  );
}

export default App;
