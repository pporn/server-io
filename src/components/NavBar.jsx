import React from 'react';
import NavBarItem from './NavBarItem';

import '../css/bulma.min.css';
import icon from '../images/icon.png';

class NavBar extends React.Component {
  constructor() {
    super();

    this.state = {
      navBarStartItems: {
        Home: {
          name: 'Home',
          url: 'http://server.io',
        },
        AriaNg: {
          name: 'AriaNg',
          url: 'http://aria2.server.io',
        },
        Jupyter: {
          name: 'Jupyter',
          url: 'http://jupyter.server.io',
        },
        MiniDLNA: {
          name: 'MiniDLNA',
          url: 'http://minidlna.server.io',
        },

      },

      navBarEndItems: {
        About: {
          name: 'About',
          url: 'http://server.io',
        },
      },

    };
  }

  render() {
    const { navBarStartItems, navBarEndItems } = this.state;

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="http://server.io">
            <img src={icon} height="28" alt="server.io" />
          </a>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            {
              Object.keys(navBarStartItems).map(
                i => <NavBarItem name={navBarStartItems[i].name} url={navBarStartItems[i].url} />,
              )
            }
          </div>
        </div>

        <div className="navbar-end">
          {
            Object.keys(navBarEndItems).map(
              i => <NavBarItem name={navBarEndItems[i].name} url={navBarEndItems[i].url} />,
            )
          }
        </div>

      </nav>
    );
  }
}

export default NavBar;
