import React from 'react';
import './App.css';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Game from './components/game';
import Stats from './components/stats';
import Navbar from './components/reusables/navbar';
import Heading from './components/reusables/Heading';

function App() {
  return (
    <div className="App">
      <Router>
        <Heading/>
        <Navbar/>
        <Switch>
          <Route  exact path="/" component={Game} />
          <Route path="/stats" component={Stats} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
