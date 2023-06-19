import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({price})=>{
	const newPrice = price * 100;
	const stripeKey = 'pk_test_51NKPTuK2z1JYMufAVOSLPTl0c3tgdl2JQ23Nsg8EauZSSID6WMkj1JiTFJzbGa6vEWbtNLioPbrinAB4e0cvnVQw00S6DybD16';

	const onToken = (token)=>{
		console.log(token)
		window.alert("success!!")
	}
	return(
		<StripeCheckout
        	token={onToken}
       		stripeKey={stripeKey}
       		label={`PAY NOW`}
       		name={`crown-clothing`}
       		billingAddress
       		shippingAddress
       		description={`Your total is £${price}`}
       		image={'https://svgshare.com/i/CUz.svg'}
       		currency={`GBP`}
       		amount={newPrice}
       		panelLabel={`Pay Now`}
      	/>
	)
}

export default StripeButton;