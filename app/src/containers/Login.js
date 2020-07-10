import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';

class Home extends React.Component {
	state={
		userName:'',
		password:''
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		console.log(this.state);
	}
  render(){
		return (
			<Fragment>
				<div className="container">
					<form onSubmit={ this.onSubmitForm }>
						<div className="form-group">
							<label htmlFor="InputEmail">Email address</label>
							<input name="email" 
								type="text" 
								className="form-control" 
								id="InputEmail" 
								onChange={e=>{
									this.setState({userName :e.target.value})
								}} 
							/>
						</div>
						<div className="form-group">
							<label htmlFor="InputPassword">Password</label>
							<input 
								name="password" 
								type="password" 
								className="form-control" 
								id="InputPassword" 
								onChange={e=>{
									this.setState({password:e.target.value})
								}}
							/>
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