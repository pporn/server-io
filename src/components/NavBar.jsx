import React from 'react';
import NavBarItem from './NavBarItem';

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

          <NavBarItem name="Home" url="http://server.io" />
          <NavBarItem name="AriaNg" url="http://aria2.server.io" />
          <NavBarItem name="Jupyter" url="http://jupyter.server.io" />
          <NavBarItem name="MiniDLNA" url="http://minidlna.server.io" />

        </div>
      </div>

      <div className="navbar-end">
        <NavBarItem name="About" url="http://server.io" />
      </div>

    </nav>
  );
}

export default NavBar;
