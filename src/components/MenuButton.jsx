// React
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  link: {
    color: 'black',
    fontWeight: 'bold',
    textDecoration: 'none',
    height: '100%',
    cursor: 'pointer',
    fontSize: '24px',
  },
};

const MenuButton = ({ link, name }) => {
  return (
    <Link className="link" to={link} style={styles.link}>
      {name}
    </Link>
  );
};

export default MenuButton;
