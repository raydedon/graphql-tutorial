import React, {Fragment} from 'react';

const Book = ({id = '', name = '', genre = '', author: {name: authorName = '', age}, onClickHandler}) => {
	return (
		<div onClick={onClickHandler(id)}>
			<h2>{ name }</h2>
			<p>{ genre }</p>
			<p>{ authorName }</p>
			<p>{ age }</p>
		</div>
	);
};

export default Book;

