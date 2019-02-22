import React from 'react';
import Author from './Author';

const BookDetails = ({id = '', name = '', genre = '', author = {}}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{genre}</p>
			<Author {...author} />
		</div>
	);
};

export default BookDetails;

