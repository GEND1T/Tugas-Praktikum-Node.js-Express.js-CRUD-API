import express from "express";
import { getProduct, insertProduct, getProductById, updateProductById, deleteProductById} from "../controllers/productControllers.js";
const router = express.Router();



router.get("/", getProduct);
router.post("/", insertProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;