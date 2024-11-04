const express = require('express');
const router = express.Router();

// Route trang About
router.get('/', (req, res) => {
    res.render('shop', {
        title: 'Our Shop',
        message: 'Shop',
        currentPage: 'shop'
    });
});

module.exports = router;