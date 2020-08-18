import React from 'react';
import './App.css';
import homebg from './images/home-bg.jpg';
import { Button, ButtonGroup } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const bg = {
  backgroundImage: `url(${homebg})`,
};

function Home() {
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
            <div className="mainPageH3">August 14, 2021</div>
            <div>
              <Link to="/en">
                <span className="mainPageH2">English</span>
              </Link>
              &emsp;
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
