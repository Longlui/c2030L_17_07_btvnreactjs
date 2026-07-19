import axios from "axios";
import React, { useEffect, useState } from "react";

import {
  Typography,Grid
} from "@mui/material";

import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/products"
    );

    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

 return (
  <div>
    <Typography variant="h4" sx={{ mb: 2 }}>Product List</Typography>

    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>

          <Typography variant="h6">{product.title}</Typography>

          <Typography variant="body1">Category: {product.category}</Typography>

          <Typography variant="body1">Price: ${product.price}</Typography>

          <Link to={`/products/${product.id}`}>Xem chi tiết sản phẩm</Link>

        </Grid>
      ))}
    </Grid>
  </div>
);
}
export default ProductList;