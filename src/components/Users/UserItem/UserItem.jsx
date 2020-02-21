import React from 'react';

import Card from '../../../shared/Card/Card';
import Avatar from '../../../shared/Avatar/Avatar';
import { ImageContainer } from './UserItem.styles';

const UserItem = (props) => {
	return (
		<li style={{ listStyle: 'none' }}>
			<Card>
				<h1>{props.name}</h1>
				<ImageContainer>
					<Avatar image={props.image} />
				</ImageContainer>
			</Card>
		</li>
	);
};

export default UserItem;
