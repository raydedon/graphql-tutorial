import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import GenericList from './GenericList';
import Book from './Book';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.displayListItems = this.displayListItems.bind(this);
	}

	displayListItems() {
		let {loading = false, books = []} = this.props.data;
		if(loading) {
			return (<div>Loading books...</div>);
		} else {
			return <GenericList itemRenderer={Book} list={books} link="true" />;
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

export default graphql(getBooksQuery)(BookList);
