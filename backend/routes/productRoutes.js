import express from 'express';
const router = express.Router();

import { getProducts, getProductById } from '../controllers/productController.js';

router.route('/').get(getProducts);
router.route('/:id').get(getProductById)

// import asyncHandler from '../middleware/asyncHandler.js'
// import Product from '../models/productModel.js'
//import products from '../data/products.js';

// router.get('/', (req, res) => {
//     res.json(products);
//   });
  
//   router.get('/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
//   });

  // router.get(
  //   '/',
  //   asyncHandler(async (req, res) => {
  //     const products = await Product.find({});
  //     //throw new Error('Some error')
  //     res.json(products);
  //   })
  // );

  // router.get(
  //   '/:id',
  //   asyncHandler(async (req, res) => {
  //     const product = await Product.findById(req.params.id);
  //     if (product) {
  //       return res.json(product);
  //     }
  //     res.status(404).json({ message: 'Product not found' });
  //   })
  // );

  export default router;