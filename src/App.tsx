// Base imports
import * as React from 'react';

// React-Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Links from './components/Links'
import RotateText from './components/RotateText';
import WebResume from './components/WebResume';

// CSS
import './App.css';
import './styles/common.css';

// Other assets
import moi from './images/avatar.jpg';

class Home extends React.Component {
  public render() {
    return (
      <div>
        <div className="Main">
          <header className="Main-header">
            <img src={moi} className="Main-portrait" alt="Portrait" />
            <h1 className="Main-title">Shantanu Tulshibagwale</h1>
            <RotateText />
            <Links />
          </header>
        </div>
      </div>
    );
  }
}

const App = () => (
  <Router>
    <Switch>
      <Route exact={true} path="/resume" component={WebResume} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);


export default App;
