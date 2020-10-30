import React from 'react';
import logoPic from '../assets/Burger-Queen-Logo-White.png';

// Components
import Button from '../components/Button';

const Home = () => (
  <section className="friesImg full-screen">
    <div className="main-container">
      <div className="left-container">
        <img src={logoPic} alt="" className="logo-pic" />
      </div>

      <div className="right-container">
        <div className="container-top margin-t-3">
          <h1>WELCOME BACK! PLEASE, CHOOSE YOUR ROL</h1>
        </div>

        <div className="container-bottom">
          <a href="/Waiter">
            <Button>WAITER</Button>
          </a>
          <a href="/Chef">
            <Button>CHEF</Button>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
