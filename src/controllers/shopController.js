const express = require('express');
const router = express.Router();
const productsModel = require("../models/productsModel");

// Route trang About
router.get('/', async (req, res) => {
    const products = (await productsModel.findAll()).rows;
    res.render('shop', {
        title: 'Our Shop',
        message: 'Shop',
        currentPage: 'shop',
        products
    });
});

router.get('/:id', async (req, res) => {
    const id=req.params.id;
    const products = (await productsModel.findByCatId(id)).rows;
    res.render('shop', {
        title: 'Our Shop',
        message: 'Shop',
        currentPage: 'shop',
        products
    });
});

module.exports = router;