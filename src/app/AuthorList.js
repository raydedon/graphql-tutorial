import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries';
import GenericList from './GenericList';
import Author from './Author';

class AuthorList extends Component {
	constructor(props) {
		super(props);
		this.state = {};

		this.displayListItems = this.displayListItems.bind(this);
	}

	displayListItems() {
		let {loading = false, authors = []} = this.props.data;
		if(loading) {
			return (<div>Loading authors...</div>);
		} else {
			return <GenericList itemRenderer={Author} list={authors} link="true" />;
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

export default graphql(getAuthorsQuery)(AuthorList);
