import React from 'react';
import logoPic from '../assets/Burger-Queen-Logo-White.png';

const Home = () => (
  <section className="friesImg full-screen">
    <div className="main-container">
      <div className="left-container">
        <img src={logoPic} alt="" className="logo-pic" />
      </div>
      <div className="right-container">
        <div className="welcome-text">
          <h1>WELCOME BACK! PLEASE, CHOOSE YOUR ROL</h1>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
