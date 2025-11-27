const express = require("express");
const router = express.Router();
const Order = require('../models/Order');

router.post("/", async (req, res) => {
  const { customer_id, service_name, quantity } = req.body;

  if (!customer_id || !service_name || !quantity)
    return res.status(400).json({ success: false, message: "All fields required" });

  try {
    const order = await Order.create({
      customer: customer_id,
      service_name,
      quantity
    });

    res.json({ success: true, order });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customer", "name phone") 
      .sort({ createdAt: -1 });

    res.json({ success: true, orders });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/:id", async (req, res) => {
  const { status } = req.body;

  if (!status)
    return res.status(400).json({ success: false, message: "Status required" });

  try {
    await Order.findByIdAndUpdate(req.params.id, { status });
    res.json({ success: true, message: "Order status updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
