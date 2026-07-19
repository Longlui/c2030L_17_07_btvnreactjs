import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Typography, Button } from "@mui/material";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  const fetchProductDetail = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    );

    setProduct(response.data);
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  return (
  <div>
    <Typography variant="h4">Product Detail Page</Typography>

    <Typography variant="body1">Product ID: {id}</Typography>

    <br />

    {product && (
      <div>
        <Typography variant="h6">Title: {product.title}</Typography>

        <Typography variant="body1">Category: {product.category}</Typography>

        <Typography variant="body1">Price: ${product.price}</Typography>

        <br />

        <img src={product.image} alt={product.title} width="150"
        />
      </div>
    )}

    <br />

    <Button component={Link} to="/products" variant="contained">Quay lại danh sách</Button>
  </div>
);
}

export default ProductDetail;