const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    const userbase = await User.create(userData);

    console.log('Userbase seeded!');
    process.exit(0);
});