import {gql} from 'apollo-boost';

const getBooksQuery = gql`
    {
        books {
            name
            id,
            author {
	            name,
	            age
            }
        }
    }
`;

export {getBooksQuery};