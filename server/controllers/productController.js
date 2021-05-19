const Product = require("../models/Product");
const {
  createProductValidator,
  updateProductValidator,
} = require("../utils/validations");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.getSingleProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found.");
    }
    res.status(200).json({ product });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const result = await createProductValidator.validateAsync(req.body);
    const product = await Product.create(result);
    res.status(201).json({ product });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await updateProductValidator.validateAsync(req.body);
    let product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    product = await Product.findOneAndUpdate(productId, result, { new: true });
    res.status(200).json({ product });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    let product = await Product.findById(productId);

    if (!product) {
      throw new Error("Product not found");
    }
    product = await Product.findOneAndDelete(productId);
    res.status(200).json({ message: "Product deleted." });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};
