import React from 'react';
import { Link } from 'react-router-dom';

// Style
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/gallery" className="link">
            Galeria
          </Link>
          <Link to="/about" className="link">
            Sobre mí
          </Link>
          <Link to="/contact" className="link">
            Contacta
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
