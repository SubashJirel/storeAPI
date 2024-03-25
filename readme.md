# Basic Store API Project

This is a basic store API project built using Express, MongoDB, and Mongoose. The API provides endpoints to manage products.

## Getting Started

To get started with the project, follow the steps below:

### Prerequisites

- Node.js installed on your local machine
- MongoDB Atlas account or a local MongoDB instance running

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using npm:

   ```bash
   npm install
   ```

## Set up your environment variables:

1. Create a `.env` file in the root directory of the project.

2. Define the following variables in the `.env` file:

   ```makefile
   MONGO_URI=<your_mongodb_uri>
   Replace <your_mongodb_uri> with your MongoDB connection string
   ```

## Project Structure

The project consists of the following main components:

- `app.js`: Entry point of the application. Sets up the Express server, defines middleware, and routes.
- `db/connect.js`: Module responsible for connecting to the MongoDB database.
- `routes/products.js`: Router module defining routes related to product management.
- `controllers/products.js`: Controller module containing functions to handle product-related operations.
- `middleware/not-found.js`: Middleware to handle 404 errors (Not Found).
- `middleware/error-handler.js`: Middleware to handle errors.

## Available Endpoints

### Products

- `GET /api/v1/products`: Get all products based on provided query parameters.
- `GET /api/v1/products/static`: Get a static list of products.

# Store API Documentation

## Introduction

Welcome to the Store API documentation. This API allows you to retrieve different products based on various query parameters.

## Base URL

The base URL for accessing the API is `/api/v1`.

## Endpoints

### Get All Products

#### Endpoint:

- `GET /api/v1/products`

#### Description:

This endpoint retrieves all products based on the provided query parameters.

#### Query Parameters:

- `featured`: Filter products by whether they are featured. Accepts boolean values (true/false).
- `company`: Filter products by company name.
- `name`: Filter products by name using a case-insensitive regular expression.
- `sort`: Sort products by one or more fields. Multiple fields can be separated by commas. Prefix `-` before a field name for descending order.
- `fields`: Select specific fields to be included in the response. Multiple fields can be separated by commas.
- `numericFilters`: Apply numeric filters to fields such as price and rating. Use the format `<field>-<operator>-<value>`, where operators include `>`, `>=`, `=`, `<`, and `<=`.

#### Example Usage:

```bash
GET /api/v1/products?featured=true&company=ExampleCompany&name=example&sort=price,-rating&fields=name,price,rating&page=1&limit=10
```

### Response

```json
{
  "products": [...], // Array of products matching the query parameters
  "nbHits": 10 // Total number of products returned
}
```

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
