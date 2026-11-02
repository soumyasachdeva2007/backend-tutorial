
const express = require('express');
const router = express.Router();

const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
} = require('../controllers/post.controller');

router.post('/', createPost);
router.get('/', getPosts);
router.get('/:id', getPostById);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

module.exports = router;
