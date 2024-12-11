import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthPage from './pages/ProfilePage';
import './styles.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </Router>
  );
}

export default App;
