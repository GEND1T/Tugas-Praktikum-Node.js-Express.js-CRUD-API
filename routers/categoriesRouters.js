import express from "express";
import { getCategories, insertCategory, getCategoryById, updateCategoryById, deleteCategoryById} from "../controllers/categoriesControllers.js";
const router = express.Router();

router.get("/", getCategories);
router.post("/", insertCategory);
router.get("/:id", getCategoryById);
router.put("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);



export default router;