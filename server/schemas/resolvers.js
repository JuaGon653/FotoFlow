const { User, Post, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('followers').populate('following').populate('posts');
        },
        find_email: async (parent, { email }) => {
            return await User.findOne({ email }).populate('followers').populate('following').populate('posts');
        },
        find_username: async (parent, { username }) => {
            return await User.findOne({ username }).populate('followers').populate('following').populate('posts');
        },
        posts: async () => {
            return await Post.find({}).populate('likes').populate('comments').populate('user');
        },
        find_post: async (parent, { id }) => {
            return await Room.findById(id).populate('likes').populate('comments').populate('user');
        },
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        }
    }
};

module.exports = resolvers;