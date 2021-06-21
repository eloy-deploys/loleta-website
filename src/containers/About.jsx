// React
import React from 'react';

// Components
import Layout from './Layout';

// Style
import '../styles/containers/About.scss';

import image1 from '../assets/about1.jpg';

const Frame = ({ picture, text, reverse }) => {
  return (
    <div className={reverse ? 'frame reverse' : 'frame'}>
      <div className="copy">
        <p>{text}</p>
      </div>
      <div className="image">
        <img src={picture} alt="a" />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <Layout>
      <div className="about">
        <div className="content">
          <Frame
            picture={image1}
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis in
          dolorem ipsum aut quaerat iure veritatis, solut"
            reverse={false}
          />
          <Frame
            picture={image1}
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis in
          dolorem ipsum aut quaerat iure veritatis, solut"
            reverse
          />
          <Frame
            picture={image1}
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis in
          dolorem ipsum aut quaerat iure veritatis, solut"
            reverse={false}
          />
          <Frame
            picture={image1}
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis in
          dolorem ipsum aut quaerat iure veritatis, solut"
            reverse
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
