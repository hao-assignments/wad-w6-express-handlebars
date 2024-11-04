const express = require('express');
const router = express.Router();

// Route trang About
router.get('/', (req, res) => {
    res.render('checkout', {
        title: 'About Us',
        message: 'Learn more about us on this page.'
    });
});

module.exports = router;