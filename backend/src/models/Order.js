const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    service_name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
    status: {
      type: String,
      default: "Received",
      enum: ["Received", "In Progress", "Completed", "Delivered"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
