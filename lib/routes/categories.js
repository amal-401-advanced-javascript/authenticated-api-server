const express = require('express');
const categories = require('../models/categories/categories-model.js');
const router = express.Router();

router.get('/categories', getCategories);
router.get('/categories/:id', getByIdCategories);
router.post('/categories', postCategories);
router.put('/categories/:id', updateByIdCategories);
router.delete('/categories/:id', deleteByIdCategories);

async function getCategories(req,res,next){
  try {
    const data = await categories.get();
    const count = data.length;
    const result = data;
    res.json({count,result});
  } catch (error) {
    next(error.message);
  }

}
async function getByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.get(id);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
  
}
async function postCategories(req,res,next){
  try {
    const data = await categories.create(req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }

}
async function updateByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    const data = await categories.update(id,req.body);
    res.json(data);
  } catch (error) {
    next(error.message);
  }
    
}
async function deleteByIdCategories(req,res,next){
  const id = req.params.id;
  try {
    await categories.delete(id);
    res.json({});
  } catch (error) {
    next(error.message);
  }
}

module.exports = router;