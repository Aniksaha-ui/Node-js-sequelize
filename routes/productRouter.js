const productController = require("../controllers/productController");
const router = require("express").Router();

router.post("/addProduct", productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);

module.exports = router;
