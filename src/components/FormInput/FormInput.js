import React from 'react';
import './styles/FormInput.scss';

const FormInput = ({...otherProps})=>{

	return(
		<div className={`FormInput-main-div ${otherProps.value.length ? 'shrink': ''}`}>
			<input 
				className={`${otherProps.value.length ? 'shrink': ''} FormInput-input-div`}
				onChange={otherProps.handleChange}
				type={otherProps.type}
				name={otherProps.name}
				value={otherProps.value}
				required/>
			{
				otherProps.label ? (
					<label
						className={`${otherProps.value.length ? 'shrink': ''} 
						form-input-label`}>
							{otherProps.label}
					</label>
				)
				: null
			}
		</div>
	)
}

export default FormInput;