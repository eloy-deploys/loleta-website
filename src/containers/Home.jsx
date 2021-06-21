// React
import React, { useEffect } from 'react';
import gsap from 'gsap';

// Components
import Layout from './Layout';

// Style
import '../styles/containers/Home.scss';

const Home = () => {
  useEffect(() => {
    gsap.set('.hide-container', {display: 'flex'})
    gsap.set('.header', {top: '-100px'})
    gsap.to('.hide.first', {
      transform: 'translateY(-100%)',
      duration: 1.5,
      ease: 'power1.out',
      delay: 0.5,
    });
    gsap.to('.hide.second', {
      transform: 'translateY(-100%)',
      duration: 1.5,
      ease: 'power1.out',
      delay: 1,
    });
    gsap.to('.hide.third', {
      transform: 'translateY(-100%)',
      duration: 1.5,
      ease: 'power1.out',
      delay: 1.5,
    });
    gsap.to('.hide-container', {
      display: 'none',
      duration: 0,
      ease: 'power1.out',
      delay: 3,
    });
    gsap.to('.header', {
      top: 0,
      duration: 0.5,
      ease: 'power1.out',
      delay: 3.25,
    });
  });
  return (
    <Layout>
      <div className="home">
        <div className="container">
          <p>home</p>
        </div>
        <div className="hide-container">
          <div className="hide first" />
          <div className="hide second" />
          <div className="hide third" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
