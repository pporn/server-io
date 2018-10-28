import React from 'react';
import PropTypes from 'prop-types';

function NavBarItem(props) {
  const { url, name } = props;

  return (
    <a className="navbar-item" href={url}>
      {name}
    </a>
  );
}

NavBarItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NavBarItem;
