import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectUserState } from './redux/App/selectors/selectos.js';
import {setUser} from './redux/App/actions/actions.js';
import {Route,Routes} from "react-router-dom";
import {auth,storeUserInFirestore,deleteUserFromFirestore} from './firebase/firebase.js'
import {onAuthStateChanged,signOut} from "firebase/auth";
import Homepage from './pages/Homepage/Homepage.js';
import Shop from './pages/Shop/Shop.js';
import Checkout from './pages/Checkout/Checkout.js';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.js';
import Header from './components/Header/Header.js';
import ShopPage from './pages/ShopPage/ShopPage.js';

const mapStateToProps = createStructuredSelector({
	currentUser: selectUserState
})

const mapDispatchToProps = (dispatch) =>{
	return({
		setUser: (user)=>{dispatch(setUser(user))}
	})
}

class App extends Component {

	componentDidMount(){
		this.loadGoogleUser()
	}

	componentWillUnmount(){
		this.logoutGoogleUser()
	}

	loadGoogleUser = () => {
		 onAuthStateChanged(auth, (user) => {
		  if (user) {
		  	storeUserInFirestore(user)
		  	.then((res)=>{
		  		console.log(res)
		  		this.props.setUser(res)
		  		console.log(this.props.currentUser)
		  	})
		  	.catch((err)=>{
		  		console.log("sign in unsuccessful")
		  	})
		  } 
		  else {
		  	console.log("no user currently signed in")
		  }
		});
	}

	logoutGoogleUser = () =>{

		if(this.props.currentUser){

		 	return signOut(auth)
			.then(()=>{
				console.log('SIGNOUT SUCCESS')
				return deleteUserFromFirestore(this.props.currentUser)
				.then((res)=>{
					console.log("sign out successful")
					this.props.setUser(res)
		  			console.log(this.props.currentUser)
				})
				.catch((err)=>{
					console.log('error DELETE FROM FIRESTORE',err)
				})
			})
			.catch((err)=>{
				console.log('error SIGNOUT AUTH',err);
			})
		}
	}
	
	render(props){
		console.log(this.props.currentUser)
		return(
			<Routes>
				<Route 
				 path="/"
				 element={<Header 
				 	user={this.props.currentUser}
				 	logoutGoogleUser={this.logoutGoogleUser}
				 />}
				 >
					<Route index element={<Homepage/>}/>
					<Route path='/hats' element={<h1>HATS</h1>}/>
					<Route path='/shop' element={<Shop/>}/>
					<Route path='/shop/:routeName' element={<ShopPage/>}/>
					<Route path='/checkout' element={<Checkout/>}/>
					<Route 
					path='/signin' 
					element={<SignInSignUp
						user={this.props.currentUser}/>}
					/>
				</Route>
				<Route path="/*" element={<h1>ERROR</h1>}/>
			</Routes>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);




