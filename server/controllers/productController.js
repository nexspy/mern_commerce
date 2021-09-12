/**
 * Handle product related logic
 */
const Product = require('../models/Product');

/**
 * Create : new product
 * path api : /api/v1/product/new
 */
exports.newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product: product
    });
}

/**
 * Get : list of products
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: 'This route will show all products in database'
    });
}