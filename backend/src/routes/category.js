// src/routes/category.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);
router.post('/', categoryController.createCategory);
router.put('/:id', authMiddleware, categoryController.updateCategory);
router.get('/:id', authMiddleware, categoryController.getCategoryById);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;

