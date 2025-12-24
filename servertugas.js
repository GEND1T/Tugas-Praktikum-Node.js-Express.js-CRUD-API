import express from "express";
import dotenv from "dotenv";

// import userRouter from "./routers/userRoutes.js";
import productRouter from "./routers/productRoutes.js";
import categoriesRouter from "./routers/categoriesRouters.js";

dotenv.config();

const app = express();
app.use(express.json());

// app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/categories", categoriesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di https://localhost:${process.env.PORT}`);
});