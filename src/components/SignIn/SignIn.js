import React, {Component} from 'react';
import './styles/SignIn.scss';
import FormInput from '../FormInput/FormInput.js';
import Button from '../Button/Button.js';
import {signInWithGoogle,signIn} from '../../firebase/firebase.js';
import withRouter from '../../global-functions/withRouter.js';

class SignIn extends Component {
	constructor(props){
		super(props);
		this.state={
			email: '',
			password:''
		}
	}

	handleSubmit = (event)=>{
		event.preventDefault();
		return signIn(this.state)
		.then((res)=>{
			this.setState({email: '', password: ''})
			this.props.router.navigate(`/`)
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	handleChange = (event)=>{
		this.setState({[event.target.name]: event.target.value})
		console.log(this.state.email)
	}

	afterGoogleSignIn =()=>{
		signInWithGoogle()
		.then((res)=>{
			this.props.router.navigate(`/`)
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	render(props){
		return(
			<div className={`signin-main-div`}>
				<h2>
					{`I already have an account`}
				</h2>
				<span>
					{`Sign in with your email and password`}
				</span>
				<div>
					<FormInput
						name={`email`}
						type={`email`}
						value={this.state.email}
						label={`email`}
						handleChange={this.handleChange} />
					<FormInput
						name={`password`}
						type={`password`}
						label={`password`}
						value={this.state.password}
						handleChange={this.handleChange} />
					<Button
						type={`submit`}
						onClick={this.handleSubmit}>
							{`sign in`}
					</Button>
					<Button
						type={`submit`}
						onClick={this.afterGoogleSignIn}
						googleButton>
							{`sign in with google`}
					</Button>
					
				</div>
			</div>
		)
	}
}

export default withRouter(SignIn);