import React from 'react';

import Button from '../Button/Button';

const OrderSummary = (props) => {
	const listOfAddedIngredients = Object.entries(props.ingredients).filter(ing => {
		return ing[1] > 0;
	}).map(ing => {
		return(
			<li key={ing[0]}>
				<span style={{textTransform: 'capitalize'}}>{ing[0]}</span>: {ing[1]}
			</li>
		);
	})

	return(
		<React.Fragment>
			<h3>Order Summary</h3>
			<p>The following ingredients have been added to your burger:</p>
			<ul>
				{listOfAddedIngredients}
			</ul>
			<hr/>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' clicked={props.cancelOrder}>Cancel</Button>
			<Button btnType='Success' clicked={props.continue}>Continue</Button>
		</React.Fragment>
	);
};

export default OrderSummary;