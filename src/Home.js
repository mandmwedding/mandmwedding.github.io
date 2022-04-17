import React, { useEffect, useState } from 'react';
import './App.css';
import homebg from './images/home-bg.jpg';
import { Button, ButtonGroup } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const bg = {
  backgroundImage: `url(${homebg})`,
  backgroundPosition: 'center center',
  backgroundSize: 'cover'
};


function Home() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`08/13/${year}`) - +new Date();
  
    let timeLeft = {};
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });


  
  return (
    <div className="App">
      <div className="overlay">
        <header className="App-header" style={bg}>
          <div style={{ zIndex: 0 }}>
            <div className="mainPageH1">
              {' '}
              <span className="mike">Mélyssa &amp;</span>
              <br />
              <span className="mel">Michael</span>
            </div>
            <div className="mainPageH3">August 13, 2022</div>
            <div>
              <span className="timer">{timerComponents.length ? timerComponents : <span>Today's the day!</span>}</span>
            </div>
            <div>
              <Link to="/en">
                <span className="mainPageH2">English</span>
              </Link>
              &emsp;|&emsp;
              <Link to="/fr">
                <span className="mainPageH2">Français</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Home;
