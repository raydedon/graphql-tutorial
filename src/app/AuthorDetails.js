import React, {Component} from 'react';
import GenericList from './GenericList';
import Book from './Book';
import {getAuthorDetailQuery} from '../queries/queries';
import {graphql} from 'react-apollo';

class AuthorDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.displayListItems = this.displayListItems.bind(this);
	}

	displayListItems() {
		let {loading = false, author: {id, name, age, books = []}} = this.props.data;
		if(loading) {
			return (<div>Loading authors...</div>);
		} else {
			return (
				<div>
					<h2>{name}</h2>
					<p>{age}</p>
					<GenericList itemRenderer={Book} list={books} />;
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				{this.displayListItems()}
			</div>
		);
	}
}

export default graphql(getAuthorDetailQuery, {
	options: (props) => ({
		variables: {
			id: props.bookId
		}
	})
})(AuthorDetails);

