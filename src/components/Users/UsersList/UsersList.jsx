import React from 'react';

import UserItem from '../UserItem/UserItem';

const UsersList = (props) => {
	if (props.items.length === 0) {
		return <div>No Users Found</div>;
	}

	return (
		<ul>
			{props.items.map((user) => {
				return (
					<UserItem
						key={user.id}
						name={user.name}
						id={user.id}
						location={user.location}
						placeCount={user.places}
						image={user.image}
					/>
				);
			})}
		</ul>
	);
};

export default UsersList;
