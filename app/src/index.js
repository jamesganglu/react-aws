import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer  from './reducers';


import Amplify from 'aws-amplify';
import { aws } from './config';

import App from './App';
import * as serviceWorker from './serviceWorker';

Amplify.configure({
  Auth:{
    mandatorySignId:true,
    region:'us-east-1',
    userPoolId:'us-east-1_DavJmyA0h',
    userPoolWebClientId:'3725rdmjg5ipi4mal4qqa4m6h5'
  }
})

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
  	<Provider store={store}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
