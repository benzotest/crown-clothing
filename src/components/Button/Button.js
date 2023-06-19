import React from 'react';
import './styles/Button.scss';


const Button = ({children,googleButton,inverted,...otherProps })=>{
	return(
		<button 
		className={`${googleButton ? 'googleButton' : '' }
		${inverted ? 'inverted' : '' } button-main-div`}
		{...otherProps}>
			{children}
		</button>
	)
}

export default Button;