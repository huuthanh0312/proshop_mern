import express from "express";
import asyncHanlder from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";
import {
  getProductById,
  getProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
