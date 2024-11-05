const express = require('express');
const router = express.Router();
const productsModel = require("../models/productsModel");

// Route trang About
router.get('/', (req, res) => {
    res.redirect("/detail/1");
    res.render('detail', {
        title: 'Shop Detail',
        message: 'Shop Detail',
        currentPage: 'detail'
    });
});

router.get('/:id', async (req, res) => {
    const id = +req.params.id;
    const product = (await productsModel.findOne(id)).rows[0];
    console.log(id, product);
    res.render('detail', {
        title: 'Shop Detail',
        message: 'Shop Detail',
        currentPage: 'detail',
        product
    });
});

module.exports = router;