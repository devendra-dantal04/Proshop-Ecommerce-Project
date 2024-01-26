require('dotenv').config();
const express = require('express');
const products = require('./data/products');
const colors = require("colors");
const connectDB = require("./config/db");
const productRouter = require("./routes/productRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandlers");

const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API Running....");
});

app.use("/api/products", productRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Jay Shree Krishna
You will found your way on http://localhost:${PORT}
You are in ${process.env.NODE_ENV} mode`.yellow.bold
  );
});