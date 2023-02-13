const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        fullName: String!
        profileImage: String
        followers: [User]
        following: [User]
        posts: [Post]
        createdAt: String
    }

    type Post {
        _id: ID!
        caption: String!
        photo: String!
        likes: [User]
        comments: [Comment]
        user: User
        createdAt: String
    }

    type Comment {
        _id: ID!
        text: String!
        user: User
        post: Post
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        find_email(email: String!): User
        find_username(username: String!): User
        posts: [Post]
        find_post(id: ID!): Post
        user(id: ID!): User
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!, fullName: String!): User
    }
`;

module.exports = typeDefs;