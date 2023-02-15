import { gql } from '@apollo/client';

export const FIND_POSTS = gql`
    query posts {
        posts {
            _id
            caption
            photo
            comments {
                user {
                    username
                }
            }
            likes {
                _id
            }
            user {
                username
            }
            createdAt
        }
    }
`