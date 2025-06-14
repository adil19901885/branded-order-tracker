# Branded Order Tracking Shopify App

## Overview

This is a simple Shopify app that allows customers to track their orders by entering the Order ID.

---

## Backend

- Node.js + Express server using `shopify-api-node` package
- Fetches recent orders from Shopify store
- Endpoint: `/orders` returns last 10 orders JSON

## Frontend

- Simple HTML/CSS/JS UI
- Input for Order ID and button to track
- Shows fulfillment status and order date

---

## Setup

1. Clone repo  
2. Create `.env` file from `.env.example` with your Shopify API keys and shop name  
3. Run backend:  
   ```bash
   cd backend
   npm install
   npm run dev
