import React, { useState, useEffect } from "react";
import Header from "../../components/header";
import Card from "react-bootstrap/Card";
import logo from "../../assets/images/Tshirt.webp";
import { getAll, remove } from "../../utils/localStorage";
import { CiCircleRemove } from "react-icons/ci";
import "./style.css";

const storageKey = "wishlist";
export const Wishlist = () => {
  const [list, setList] = useState([]);

  const handleSearch = (value) => {
    const filterProducts = list.filter((product) =>
      product.title.toLowerCase().includes()(value.toLowerCase())
    );
    setList(filterProducts);
  };

  const get = () => {
    const data = getAll(storageKey);
    setList(data);
  };

  useEffect(() => {
    get();
  }, []);

  const removeItem = (item) => {
    const data = remove(storageKey, item);
    setList(data);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        <h3>
          <a href="/">Home &gt;</a> <a href="/wishlist"> Lista de desejos </a>
        </h3>
        <div className="content">
          {list.map((l) => (
            <div key={l.id}>
              {list.findIndex((e) => e.id === l.id) !== -1 ? (
                <Card style={{ width: "18rem" }} className="card">
                  <CiCircleRemove
                    className="wish-icon-close"
                    onClick={() => removeItem(l)}
                  />
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title className="product-title">{l.title}</Card.Title>
                    <Card.Text className="product-content">
                      R$ {l.price}0
                    </Card.Text>
                  </Card.Body>
                </Card>
              ) : (
                <h1> Nenhum elemento selecionado</h1>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
