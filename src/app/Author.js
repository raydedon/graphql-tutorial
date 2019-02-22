import React from 'react';
import {Link} from 'react-router-dom';

const Author = ({id = '', name = '', age, link = false}) => {
	let displayContent = () => (
		<div>
			<h2>{name}</h2>
			<p>{age}</p>
		</div>
	);
	return link ? <Link to={`/authors/${id}`}>{displayContent()}</Link> : displayContent();
};

export default Author;

