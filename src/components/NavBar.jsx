import React from 'react';

import '../css/bulma.min.css';
import icon from '../images/icon.png';

function NavBar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="http://server.io">
          <img src={icon} height="28" alt="server.io" />
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-start">

          <a className="navbar-item" href="http://server.io">
            Home
          </a>

          <a className="navbar-item" href="http://aria2.server.io">
            AriaNg
          </a>

          <a className="navbar-item" href="http://jupyter.server.io">
            Jupyter
          </a>

          <a className="navbar-item" href="http://minidlna.server.io">
            MiniDLNA
          </a>

        </div>
      </div>

      <div className="navbar-end">
        <a className="navbar-item" href="http://server.io">
          About
        </a>
      </div>

    </nav>
  );
}

export default NavBar;
