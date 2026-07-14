import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(function () {

    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {

        setProducts(response.data);

      });

  }, []);

  function addProduct() {

    let newProduct = {

      title: title,
      price: price,
      image: image,

    };

    axios
      .post("https://fakestoreapi.com/products", newProduct)
      .then(function (response) {

        setProducts(function (oldProducts) {

          return [...oldProducts, response.data];

        });

        setTitle("");
        setPrice("");
        setImage("");

      });

  }

  function deleteProduct(id) {

    axios
      .delete("https://fakestoreapi.com/products/" + id)
      .then(function () {

        setProducts(function (oldProducts) {

          return oldProducts.filter(function (product) {

            return product.id !== id;

          });

        });

      });

  }

  return (

    <div className="container">

      <h1>Quản lý sản phẩm</h1>

      <div className="form">

        <input type="text" placeholder="Tên sản phẩm" value={title} onChange={function (e) {
            setTitle(e.target.value);

          }}
        />

        <input type="number" placeholder="Giá sản phẩm" value={price} onChange={function (e) {
            setPrice(e.target.value);

          }}
        />

        <input type="text" placeholder="Link ảnh" value={image} onChange={function (e) {
            setImage(e.target.value);

          }}
        />

        <button onClick={addProduct}>Thêm sản phẩm</button>

      </div>

      <div className="product-list">

        {

          products.map(function (product) {

            return (

              <div className="card" key={product.id}>

                <img
                  src={product.image}
                  alt={product.title}
                />

                <h3>{product.title}</h3>

                <p><b>Giá:</b> ${product.price}</p>

                <p><b>Danh mục:</b> {product.category}</p>

                <p>{product.description}</p>

                <button onClick={function () {
                    deleteProduct(product.id);
                  }}
                >Xóa</button>
              </div>

            );

          })

        }

      </div>

    </div>

  );

}

export default App;