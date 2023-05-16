const { Comment } = require("../models");

const commentData = 
[
    {
        id: 1,
        title: "Joshua's Take",
        userId: 1,
        postId: 2,
        commentContent: "dope"
    },
    {
        id: 2,
        title: "Wow",
        userId: 2,
        postId: 1,
        commentContent: "word"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;