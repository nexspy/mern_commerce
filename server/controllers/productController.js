/**
 * Handle product related logic
 */

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