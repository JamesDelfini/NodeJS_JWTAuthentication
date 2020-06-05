const express = require('express');
const app = express();

const posts = [
    {
        username: 'Delfini',
        title: 'Post 1'
    },
    {
        username: 'James',
        title: 'Post 2'
    },
]

app.get('/posts', (req, res) => {
    res.json(posts)
});

app.listen(5000);