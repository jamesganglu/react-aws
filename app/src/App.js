import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Amplify from 'aws-amplify';

import { aws } from './config';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/general.scss';

import Navbar from './components/NavBar';
import Home from './containers/Home';
import Articles from './containers/Articles';
import Article from './containers/Article';
import Login from './containers/Login';
import Register from './containers/Register';

Amplify.configure({
  Auth:{
    mandatorySignId:true,
    region:aws.cognito.REGION,
    userPoolId:aws.cognito.USER_POOL_ID,
    userPoolWebClientId:aws.cognito.APP_CLIENT_ID
  }
})
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
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </main>
      </Router>
      

    </div>
  );
}

export default App;
