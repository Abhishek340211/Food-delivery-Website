const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  const newFood = new Food(req.body);
  try {
    const savedFood = await newFood.save();
    res.status(201).json(savedFood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;