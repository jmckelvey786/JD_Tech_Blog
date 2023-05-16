const { User } = require("../models");

const userData = 
[
    {
        id: 1,
        username: "jmckelvey",
        password: "123456"
    },
    {
        id: 2,
        username: "jmack",
        password: "123456"
    },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;