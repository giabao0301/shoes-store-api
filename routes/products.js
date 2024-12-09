const router = require("express").Router();
const productsController = require("../controllers/productsController");
router.get("/", productsController.getAllProduct);
router.get("/:id", productsController.getProduct);
router.get("/search/:key", productsController.searchProduct);
router.post("/", productsController.createProduct);

module.exports = router;
