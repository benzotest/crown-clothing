import React from 'react';
import './styles/SignInSignUp.scss';
import SignIn from '../../components/SignIn/SignIn.js';
import SignUp from '../../components/SignUp/SignUp.js';
import {Navigate} from "react-router-dom";

const SignInSignUp = (props)=>{
	if(props.user){
		return <Navigate to ="/"/>
	}
	else{
		return(
			<div className={`SignInSignUp-main-div`}>
				<SignIn/>
				<SignUp/>
			</div>
		)
	}
}

export default SignInSignUp;