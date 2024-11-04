const express = require('express');
const router = express.Router();
const users = require('../models/data');

// Route trang Home
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Home Page',
        layout: 'index-layout', // Sử dụng layout khác cho trang Home
        message: 'Welcome to the Home Page!',
        users
    });
});

module.exports = router;