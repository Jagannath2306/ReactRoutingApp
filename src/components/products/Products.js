import React, { useEffect, useState } from "react";
import client from "../../utilities/api";
import ProductsStyle from "./ProductsStyle.css";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    client.get("/products").then((res) => {
      setProducts(res.data.products);
    });
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-12 p-4">
          <h1>Products List </h1>
        </div>
      </div>
      <div className="row">
        {products.map((product, ind) => {
          return (
            <div className="col-3" key={product.id}>
              <div className="card col-hight align-items-center pt-2 shadow">
                <img
                  src={product.thumbnail}
                  className="card-img-top card-img"
                  alt="..."
                />
                <div className="card-body h-25">
                  <p className="card-text fw-bold"> {product.title}</p>
                  <p className="fw-light"> {product.description}</p>
                </div>
                <Link to={`/productdetails/${product.id}`} className="btn btn-info mb-4"> View Details</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
