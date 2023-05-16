const { Post } = require("../models");

const postData = 
[
    {
        id: 1,
        title: "Joshua",
        userId: 1,
        postContent: "Do the truffle shuffle"
    },
    {
        id: 2,
        title: "Hey you guys",
        userId: 2,
        postContent: "This is our time down here"
    },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;