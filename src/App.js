import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CharacterPage from './Pages/CharacterPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/character" exact render={(props) => <CharacterPage {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
