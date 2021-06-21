// React
import React from 'react';

// Style
import '../styles/Layout.scss';

// Components
import MenuButton from '../components/MenuButton';

const Layout = ({ children }) => {
  return (
    <>
      <div className="header">
        <div className="menu">
          <MenuButton link="/gallery" name="GALERÍA" />
          <MenuButton link="/about" name="LOLETA" />
          <MenuButton link="/contact" name="CONTACTA" />
        </div>
      </div>
      {children}
    </>
  );
};

export default Layout;
