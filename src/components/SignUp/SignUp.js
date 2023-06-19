import React,{Component} from 'react';
import './styles/SignUp.scss';
import FormInput from '../FormInput/FormInput.js';
import Button from '../Button/Button.js';
import {signUp} from '../../firebase/firebase.js';
import withRouter from '../../global-functions/withRouter.js';

class SignUp extends Component{
	constructor(props){
		super(props);
		this.state={
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleChange = (event)=>{
		const {name,value} = event.target;
		console.log(value)
		this.setState({[name]: value})
	}

	handleSubmit = (event) =>{
		event.preventDefault();
		const {password,confirmPassword}=this.state;
		if(password !== confirmPassword){
			alert(`passwords do not match`)
		}
		return signUp(this.state)
		.then((res)=>{
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
			this.props.router.navigate(`/`)
		})
		.catch((err)=>{
			console.log(err)
		})
	}

	render(props){
		return(
			<div className={`sign-up-main-div`}>
				<h2 className={`sign-up-title`}>
					{`I do not have an account`}
				</h2>
				<span>{`Sign up with your email and password`}</span>
				<form className={`sign-up-form`} onSubmit={this.handleSubmit}>
					<FormInput
						type={`text`}
						name={`displayName`}
						value={this.state.displayName}
						handleChange={this.handleChange}
						label={'Display Name'}
						required
					/>
					<FormInput
						type={`email`}
						name={`email`}
						value={this.state.email}
						handleChange={this.handleChange}
						label={'email'}
						required
					/>
					<FormInput
						type={`password`}
						name={`password`}
						value={this.state.password}
						handleChange={this.handleChange}
						label={'password'}
						required
					/>
					<FormInput
						type={`password`}
						name={`confirmPassword`}
						value={this.state.confirmPassword}
						handleChange={this.handleChange}
						label={'confirmPassword'}
						required
					/>
					<Button type={'submit'}>{`SIGN UP`}</Button>
				</form>
			</div>
		)
	}
}
export default withRouter(SignUp);


