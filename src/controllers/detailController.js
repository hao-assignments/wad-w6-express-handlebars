const express = require('express');
const router = express.Router();

// Route trang About
router.get('/', (req, res) => {
    res.render('detail', {
        title: 'Shop Detail',
        message: 'Shop Detail',
        currentPage: 'detail'
    });
});

module.exports = router;