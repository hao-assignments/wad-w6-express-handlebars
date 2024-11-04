const express = require('express');
const router = express.Router();

// Route trang About
router.get('/', (req, res) => {
    res.render('register', {
        title: 'Register',
        message: 'Register',
        currentPage: 'register'
    });
});

module.exports = router;