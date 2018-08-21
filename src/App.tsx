// Base imports
import * as React from 'react';

// Components
import Links from './components/Links'
import RotateText from './components/RotateText';
import WebResume from './components/WebResume';

// CSS
import './App.css';

// Other assets
import moi from './images/avatar.jpg';

class App extends React.Component {
  public render() {
    return (
      <div>
        <div className="Main">
          <header className="Main-header">
            <img src={moi} className="Main-portrait" alt="Portrait" />
            <h1 className="Main-title">Shantanu Tulshibagwale</h1>
            <RotateText />
            <Links />
            <WebResume />
          </header>
        </div>
      </div>
    );
  }
}

export default App;
