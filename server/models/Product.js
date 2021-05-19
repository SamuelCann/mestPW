const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Product title is required."],
    },
    price: {
      type: String,
      required: [true, "Product price is required."],
    },
    image: {
      type: String,
      required: [true, "Product image is required."],
    },
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Product", productSchema);
