import React from 'react';

import { StyledCard } from './Card.styles';

const Card = (props) => {
	return (
		<StyledCard className={`card ${props.className}`} style={props.style}>
			{props.children}
		</StyledCard>
	);
};

export default Card;
