1. login to aws, cognito, manage user pool, create a user pool
	fill and next. and get the infos and fill up follow

2. create ./config.json
	{
		'cognito':{
			'REGION':
			'USER_POOL_ID':
			'APP_CLIENT_ID':
		}
	}

3. in ./index.js
	import Amplify from 'aws-amplify';
	import config from './config'

	Amplify.configure({
		Auth{
			mandatorySignId:true,
			region:config.cognito.REGION,
			userPoolId:config.cognito.USER_POOL_ID,
			userPoolWebClientId:config.cognito.APP_CLIENT_ID
		}
	})

4. 