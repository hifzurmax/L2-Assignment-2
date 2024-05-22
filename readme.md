# Order Management System

This is a simple Order Management System built with Node.js, Express, and MongoDB. It allows you to create, retrieve, update, and delete orders and products. Additionally, it includes validation using Zod and proper error handling.

## Features

### Product Management

- **Create a New Product**
- **Retrieve a List of All Products**
- **Retrieve a Specific Product by ID**
- **Update Product Information**
- **Delete a Product**
- **Search a Product**

### Order Management API Endpoints

- **Create a new order**
- **Retrieve all orders**
- **Retrieve orders by user email**
- **Update product inventory based on orders**
- **Validate product availability and inventory quantity**
- **Error handling for invalid product IDs and insufficient inventory**

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/) (v22.2.0 or later)
- [npm](https://www.npmjs.com/) (10.7.0 or later)
- [MongoDB](https://www.mongodb.com/) (cloud-based)

## Getting Started

### 1. Clone the Repository

```bash
https://github.com/your-username/order-management-system.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a .env file in the root directory and add the following environment variables:

```bash
PORT=5000
MONGODB_URI=mongodb+srv://hifzur:44398787@cluster0.sz5ysgx.mongodb.net/assignment-2?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Run the application

```bash
npm run start:dev
```
