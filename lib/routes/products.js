const express = require('express');
const products = require('../models/products/products-model.js');
const router = express.Router();

router.get('/products', getproducts);
router.get('/products/:id', getByIdproducts);
router.post('/products', postproducts);
router.put('/products/:id', updateByIdproducts);
router.delete('/products/:id', deleteByIdproducts);

async function getproducts(req,res,next){
  try {
    const data = await products.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (error) {
    next(error.message);
  }

}
async function getByIdproducts(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.get(id);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
  
}
async function postproducts(req,res,next){
  try {
    const data = await products.create(req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}
async function updateByIdproducts(req,res,next){
  const id = req.params.id;
  try {
    const data = await products.update(id,req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
    
}
async function deleteByIdproducts(req,res,next){
  const id = req.params.id;
  try {
    await products.delete(id);
    res.json({});
  } catch (error) {
    next(error.message);
  }
}

module.exports = router;