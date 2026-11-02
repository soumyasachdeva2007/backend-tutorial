const express = require('express');
const cors = require('cors');

const userRoutes = require('./routes/user.route');
const postRoutes = require('./routes/post.route');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);

app.get('/', (req, res) => {
    res.send('Backend Server is Running!');
});

module.exports = app;
