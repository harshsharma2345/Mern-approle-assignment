const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const OrderSchema = new Schema({
  orderName: {
    type: String,
    required: true
  },
  orderQuantity: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  orderStatus: {
    type: String,
    required: true
  }
});

module.exports = Orders = mongoose.model("orders", OrderSchema);
