import React from 'react';
import { Link } from 'react-router-dom';

// Style
import '../styles/Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <Link to="/gallery" className="link">
            GALERÍA
          </Link>
          <Link to="/about" className="link">
            SOBRE MÍ
          </Link>
          <Link to="/contact" className="link">
            CONTACTA
          </Link>
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
