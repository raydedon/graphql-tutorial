import React, {Fragment} from 'react';

const Book = ({id = '', name = '', genre = '', author: {name: authorName = '', age}}) => {
	return (
		<div>
			<h2>{name}</h2>
			<p>{genre}</p>
			<p>{authorName}</p>
			<p>{age}</p>
		</div>
	);
};

export default Book;

