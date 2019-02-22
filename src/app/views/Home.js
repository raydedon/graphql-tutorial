import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<Link to="/authors" className="btn btn-primary">Authors</Link>
			<Link to="/books" className="btn btn-primary">Books</Link>
		</div>
	);
};

export default Home;