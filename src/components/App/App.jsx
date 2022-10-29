import React from 'react';
import axios from 'axios';
import './App.css';


//router imports
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  //setup axis calls here GET and POST

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route path="/" exact>
          <h1>feeling</h1>
          <Link to='/understanding'>
            <h1>go to understanding</h1>
          </Link>
        </Route>
        <Route path="/understanding" exact>
          <h1>understanding</h1>
          <Link to='/support'>
            <h1>go to support</h1>
          </Link>
        </Route>
        <Route path="/support" exact>
          <h1>support</h1>
          <Link to='/comments'>
            <h1>go to comments</h1>
          </Link>
        </Route>
        <Route path="/comments" exact>
          <h1>comments</h1>
          <Link to='/review'>
            <h1>go to review</h1>
          </Link>
        </Route>
        <Route path="/review" exact>
          <h1>review</h1>
        </Route>
      </Router>
    </div>
  );
}

export default App;
