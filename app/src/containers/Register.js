import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import {getPosts} from '../actions/index';

class Home extends React.Component {
	state={
		userName:'',
		email:'',
		password:''
	}

	onSubmitForm = (e) => {
		e.preventDefault();
		console.log(this.state);
	}


	onInputChange = (e) =>{
		this.setState({
			[e.target.id]:e.target.value
		})
	} 
  render(){
		return (
			<Fragment>
				<div className="container">
					<form onSubmit={ this.onSubmitForm }>
						<div className="form-group">
							<label htmlFor="userName">User Name</label>
							<input name="userName" 
								type="text" 
								className="form-control" 
								id="userName" 
								onChange={e=>{this.onInputChange(e)}}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input name="email" 
								type="text" 
								className="form-control" 
								id="email" 
								onChange={e=>{this.onInputChange(e)}}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input 
								name="password" 
								type="password" 
								className="form-control" 
								id="password" 
								onChange={e=>{this.onInputChange(e)}}
							/>
							<p>uppercase letters, lowercase letters, special characters, numbers
							Minimum password length 8</p>
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