import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import "./style.css";
import { useState } from "react";

function Header({ onSearch }) {
  const [search, setSearch] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([])

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    onSearch(value);

    setSearch(value);
    if (value === "") {
      setProducts(allProducts);
    } else {
      onSearch(value);
    }
  };

  return (
    <>
      <div className="header">
        <Nav defaultActiveKey="/home" as="ul" className="components-header">
          <Nav.Link href="/" className="h5">
            MagaNets
          </Nav.Link>
          <Nav.Item as="li">
            <Nav.Link className="links">
              <div className="links-content">
                <MdLocationOn /> Cidade: São Paulo
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link className="links">
              <div className="links-content">
                <BsFillTelephoneFill /> Central de atendimento
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/wishlist" className="links">
              <div className="links-content">
                <AiFillHeart /> Lista de desejos
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="div-input">
          <input
            type="text"
            placeholder="Busca"
            className="input-header"
            value={search}
            onChange={handleSearch}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Header;
