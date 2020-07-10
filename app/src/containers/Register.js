import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Auth } from 'aws-amplify';
import ValidaRegister from '../utilities/validators'

class Home extends React.Component {
	state={
		username:'',
		email:'',
		password:'',
		errors:{

		}
	}

	onSubmitForm = async (e) => {
		e.preventDefault();
		//will do validations

		const {username, password, email} = this.state;

		try{
			const signUpResponse = await Auth.signUp({
				username,
				password,
				attributes:{
					email
				}
			});
			console.log(signUpResponse);
		}catch(err){
			console.log(err)
		}
		
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
							<label htmlFor="username">User Name</label>
							<input name="userName"
								type="text" 
								value={this.state.userName}
								className="form-control" 
								id="username" 
								onChange={e=>{this.onInputChange(e)}}
							/>
						</div>
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input name="email" 
								type="text" 
								value={this.state.email}
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
						<div className="form-group">
							<label htmlFor="repassword">Re-enter Password</label>
							<input 
								name="repassword" 
								type="password" 
								className="form-control" 
								id="repassword" 
								onChange={e=>{this.onInputChange(e)}}
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
		message:state.auth
	}
}
const mapDispatchToProps = {
}

export default connect(mapStateTopProps, mapDispatchToProps)(Home);