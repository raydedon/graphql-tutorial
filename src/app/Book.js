import React from 'react';
import {Link} from 'react-router-dom';

const Book = ({id = '', name = '', genre = '', author: {name: authorName = '', age}, link = false}) => {
	let displayContent = () => (
		<div>
			<h2>{name}</h2>
			<p>{genre}</p>
			<p>{authorName}</p>
			<p>{age}</p>
		</div>
	);
	return link ? <Link to={`/books/${id}`}>{displayContent()}</Link> : displayContent();
};

export default Book;

