import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.scss';

import Navbar from './components/NavBar';

import Home from './containers/Home';
import Articles from './containers/Articles';
import Article from './containers/Article';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/posts" component={Articles} />
            <Route exact path="/post/:id" component={Article} />
          </Switch>
        </main>
      </Router>
      

    </div>
  );
}

export default App;
