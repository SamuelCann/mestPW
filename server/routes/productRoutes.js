const router = require("express").Router();
const productController = require("../controllers/productController");

router
  .route("/")
  .get(productController.getAllProducts)
  .post(productController.createProduct);

router
  .route("/:productId")
  .get(productController.getSingleProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
