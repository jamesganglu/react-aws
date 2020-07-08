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
		region:aws.cognito.REGION,
		userPoolId:aws.cognito.USER_POOL_ID,
		userPoolWebClientId:aws.cognito.APP_CLIENT_ID
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
