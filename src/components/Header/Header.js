import React from 'react';
import {connect} from 'react-redux';
import {toggleCart} from '../../redux/Cart/actions/actions.js';
import {Link, Outlet} from 'react-router-dom';
import './styles/Header.scss';
import CartIcon from '../Cart-icon/Cart-icon.js';
import CartDropdown from '../CartDropdown/CartDropdown.js';

const mapStateToProps = (state)=>{
	return({
		toggleCartProp: state.toggleCartReducer.toggleCart,
	})
}
const mapDispatchToProps = (dispatch) =>{
	return({
		toggleCartAction: ()=>{dispatch(toggleCart())},
	
	})
}


const Header = ({user,logoutGoogleUser,toggleCartAction
,toggleCartProp })=>{
	console.log()
	return(
		<nav>
			<div className={`header-main-div`}>
				<div className={`header-options`}>
					<Link to="/shop" className={`header-options-shop`}>
						{'SHOP'}
					</Link>
					<Link to="/contact" className={`header-options-contact`}>
						{'CONTACT'}
					</Link>
					{
						user ? 
						<Link to="/" 
						className={`header-options-signout`}
						onClick={logoutGoogleUser}>
							{`SIGN OUT`}
						</Link>
						:
						<Link to="/signin" 
						className={`header-options-signout`}>
							{`SIGN IN`}
						</Link>	
					}
					<CartIcon toggleCartAction ={toggleCartAction}/>								
				</div>
				{
					toggleCartProp ?
					<CartDropdown/>	:
					null
				}
			</div>
			 <div id="header-detail">
	        	<Outlet />
	     	</div>
		</nav>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

