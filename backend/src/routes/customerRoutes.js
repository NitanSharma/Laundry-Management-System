const express = require("express");
const router = express.Router();
const pool = require("../config/db");
const Customer = require('../models/Customer');

// add customer
router.post("/", async (req, res) => {
  const { name, phone, address } = req.body;

  if (!name || !phone || !address)
    return res.status(400).json({ success: false, message: "All fields required" });

  try {
    const customer = await Customer.create({ name, phone, address });
    res.json({ success: true, customer });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});
// List Customer
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json({ success: true, customers });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
