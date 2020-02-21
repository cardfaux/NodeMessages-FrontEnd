import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Users from './pages/Users/Users';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Route path='/' exact component={Users} />
			</Router>
		</div>
	);
}

export default App;
