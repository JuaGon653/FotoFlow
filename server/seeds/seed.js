const db = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData.json');
const postData = require('./postData.json');

db.once('open', async () => {
    await User.deleteMany({});
    await Post.deleteMany({});
    await Comment.deleteMany({});

    const userbase = await User.create(userData);
    const postbase = await Post.create(postData);

    for (newPost of postbase) {
        const sequenceUser = userbase[postbase.indexOf(newPost)];
        newPost.user = sequenceUser._id;
        await newPost.save();

        sequenceUser.posts = [newPost._id];
        await sequenceUser.save();
    }

    console.log('Userbase seeded!');
    process.exit(0);
});