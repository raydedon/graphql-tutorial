import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

// components
import BookList from './BookList';
import Home from './views/Home';
import AuthorList from './AuthorList';
import AuthorDetails from './AuthorDetails';
import BookDetails from './BookDetails';

// apollo client setup
const client = new ApolloClient({
	uri: 'http://localhost:3000/graphql'
});

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div id="main">
					<h1>Ninja's Reading List</h1>
					<Router>
						<div>
							<Route exact path="/" component={Home} />
							<Route path="/authors" component={AuthorList} />
							<Route path="/authors/:authorId" component={AuthorDetails} />
							<Route path="/books" component={BookList} />
							<Route path="/books/:bookId" component={BookDetails} />
						</div>
					</Router>
				</div>
			</ApolloProvider>
		);
	}
}

export default App;
