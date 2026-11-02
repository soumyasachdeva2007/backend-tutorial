
const Post = require('../models/Post');

// Create a post
const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const post = new Post({
            title,
            content,
            author
        });

        await post.save();

        res.status(201).json({
            message: 'Post created successfully',
            post
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all posts
const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email');

        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single post
const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
            .populate('author', 'username email');

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a post
const updatePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        await post.save();

        res.status(200).json({
            message: 'Post updated successfully',
            post
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a post
const deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) {
            return res.status(404).json({
                message: 'Post not found'
            });
        }

        res.status(200).json({
            message: 'Post deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost
};
