import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/header";
import Card from "react-bootstrap/Card";
import { AiFillHeart } from "react-icons/ai";
import logo from "../../assets/images/Tshirt.webp";
import { getAll, save, remove } from "../../utils/localStorage";
import "./style.css";

const api =
  "https://run.mocky.io/v3/66063904-d43c-49ed-9329-d69ad44b885e/products";

const storageKey = "wishlist";

export const Main = () => {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [wishlist, setWishlist] = useState(getAll(storageKey));

  const handleSearch = (value) => {
    const filterProducts = allProducts.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setProducts(filterProducts);
  };

  useEffect(() => {
    axios
      .get(api)
      .then((response) => {
        setProducts(response.data.products);
        setAllProducts(response.data.products);
      })
      .catch((error) => {
        alert(
          "Não foi possível encontrar encontar a lista de produtos no momento, por favor tente mais tarde!"
        );
      });
  }, []);

  const saveProduct = (product) => {
    const data = save("wishlist", product);
    setWishlist(data);
  };

  const removeItem = (item) => {
    const data = remove(storageKey, item);
    setWishlist(data);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        <h3> <a href='/'> Home </a> </h3>
        <div className="content">
          {products.map((p) => (
            <Card style={{ width: "18rem" }} className="card" key={p.id}>
              {wishlist.findIndex((e) => e.id === p.id) !== -1 ? (
                <AiFillHeart
                  className="wish-icon"
                  style={{ color: "red" }}
                  onClick={() => removeItem(p)}
                />
              ) : (
                <AiFillHeart
                  className="wish-icon"
                  onClick={() => saveProduct(p)}
                />
              )}
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <Card.Title className="product-title" key={p.id}>
                  {p.title}
                </Card.Title>
                <Card.Text className="product-content">R$ {p.price}0</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};
