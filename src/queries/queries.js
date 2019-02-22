import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            id
            name
            genre
            author {
                id
	            name
	            age
            }
        }
    }
`;

const getAuthorsQuery = gql`
    {
        authors {
            id
            name
            age
            books {
                id
                name
                genre
            }
        }
    }
`;

const getBookDetailQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
		            id
		            name
		            genre
                }
            }
        }
    }
`;

const getAuthorDetailQuery = gql`
    query GetAuthor($id: ID){
        author(id: $id) {
            id
            name
            age
            books {
                id
                name
                genre
                books {
		            id
		            name
		            genre
                }
            }
        }
    }
`;

export {getBooksQuery, getAuthorsQuery, getBookDetailQuery, getAuthorDetailQuery};