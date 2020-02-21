import React from 'react';

import { StyledAvatar } from './Avatar.styles';

const Avatar = (props) => {
	return (
		<StyledAvatar className={`avatar ${props.className}`} style={props.style}>
			<img
				src={props.image}
				alt={props.alt}
				style={{ width: props.width, height: props.width }}
			/>
		</StyledAvatar>
	);
};

export default Avatar;
