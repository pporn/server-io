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
          key: 1,
          name: 'Home',
          url: 'http://server.io',
        },
        AriaNg: {
          key: 2,
          name: 'AriaNg',
          url: 'http://aria2.server.io',
        },
        Jupyter: {
          key: 3,
          name: 'Jupyter',
          url: 'http://jupyter.server.io',
        },
        MiniDLNA: {
          key: 4,
          name: 'MiniDLNA',
          url: 'http://minidlna.server.io',
        },

      },

      navBarEndItems: {
        About: {
          key: 1,
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
                i => (
                  <NavBarItem
                    key={navBarStartItems[i].key}
                    name={navBarStartItems[i].name}
                    url={navBarStartItems[i].url}
                  />
                ),
              )
            }
          </div>
        </div>

        <div className="navbar-end">
          {
            Object.keys(navBarEndItems).map(
              i => (
                <NavBarItem
                  key={navBarEndItems[i].key}
                  name={navBarEndItems[i].name}
                  url={navBarEndItems[i].url}
                />
              ),
            )
          }
        </div>

      </nav>
    );
  }
}

export default NavBar;
