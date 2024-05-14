import express from "express";
import asyncHanlder from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

const router = express.Router();

router.get(
  "/",
  asyncHanlder(async (req, res) => {
    const product = await Product.find({});
    throw new Error(`Resource not found`);
    res.json(product);
  })
);

router.get(
  "/:id",
  asyncHanlder(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error(`Resource not found`);
    }
  })
);

export default router;
