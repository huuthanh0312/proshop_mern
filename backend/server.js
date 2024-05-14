import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import productRoutes from "./routes/productRoutes.js";
const port = process.env.PORT || 5000;

connectDB(); // connec to DB
const app = express();

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use("/api/products", productRoutes);
// error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("Server ruuning on port ", port));
