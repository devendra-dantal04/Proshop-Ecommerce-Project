require('dotenv').config();
const express = require('express');
const products = require('./data/products');

const app = express();


app.get('/', (req, res) => {
    res.send("API Running....");
})

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);

    res.json(product);
})


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Jay Shree Krishna
You will found your way on http://localhost:${PORT}
You are in ${process.env.NODE_ENV} mode`);
})