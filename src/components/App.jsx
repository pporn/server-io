import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import '../css/App.css';
import '../css/bulma.min.css';

function App() {
  return (
    <div className="Site">
      <div className="Site-content">
        <NavBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
