import React from 'react';

import UsersList from '../../components/Users/UsersList/UsersList';

const Users = () => {
	const DUMMY_USERS = [
		{
			id: 'u1',
			name: 'James Hagood',
			location: 'Birmingham, AL',
			image:
				'https://wmbird150.com/wp-content/uploads/2015/04/maybank-_resized340x427.jpg',
			places: 2
		}
	];

	return <UsersList items={DUMMY_USERS} />;
};

export default Users;
