import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';
import GenericList from './GenericList';
import Book from "./Book";

class BookList extends Component {
	constructor(props){
		super(props);
		this.state = {};
		
		this.displayBooks = this.displayBooks.bind(this);
	}
	
	displayBooks() {
		var {loading, books} = this.props.data;
		if(loading){
			return( <div>Loading books...</div> );
		} else {
			return <GenericList itemRenderer={Book} list={books} onClick={ (id) => this.setState({ selected: id }) } />
		}
	}
	
	render() {
		return(
			<div>
				<ul id="book-list">
					{ this.displayBooks() }
				</ul>
				<BookDetails bookId={ this.state.selected } />
			</div>
		);
	}
}

export default graphql(getBooksQuery)(BookList);
