import React from 'react';
import '../styles/containers/Home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="header">
          <div className="logo">
            <h3>Loleta</h3>
          </div>
          <div className="menu">
            <p>Sobre mí</p>
            <p>Galería</p>
            <p>Contacta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
