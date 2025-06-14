require('dotenv').config();
const express = require('express');
const Shopify = require('shopify-api-node');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const shopify = new Shopify({
  shopName: process.env.SHOP_NAME,  // e.g., "yourstore" without ".myshopify.com"
  apiKey: process.env.SHOPIFY_API_KEY,
  password: process.env.SHOPIFY_API_SECRET,
  autoLimit: true,
});

// Fetch latest 10 orders
app.get('/orders', async (req, res) => {
  try {
    const orders = await shopify.order.list({ limit: 10 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
