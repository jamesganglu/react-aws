import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';

class Home extends React.Component {

	onSubmit = data => {
		console.log(data);
		return false;
	}
  render(){
		return (
			<Fragment>
				<div className="container">
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
							<label htmlFor="InputEmail">Email address</label>
							<input name="email" type="text" className="form-control" id="InputEmail" />
						</div>
						<div className="form-group">
							<label htmlFor="InputPassword">Password</label>
							<input name="password" type="password" className="form-control" id="InputPassword" />
						</div>
						<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</Fragment>
		)
	}

}

const mapStateTopProps = state => {
	return {
		posts : state.resources.posts,
		message:state.auth
	}
}
const mapDispatchToProps = {
	getPosts
}

export default connect(mapStateTopProps, mapDispatchToProps)(Home);