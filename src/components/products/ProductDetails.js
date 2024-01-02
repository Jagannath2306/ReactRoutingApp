import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import client from "../../utilities/api";
import ProductsStyle from "./ProductsStyle.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    client.get(`/products/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, []);
  return (
    <>
      <div className="row mt-3">
        <div className="col-12 mx-1 px-4 d-flex justify-content-between">
          <h3>Product Details </h3>
          <Link to={`/products`} className="btn btn-outline-secondary mt-2"> Back </Link>
        </div>
      </div>

      <div className="row p-3">
      <hr />
        <div className="col-4 px-2">
          <img
            src={product.thumbnail}
            className="card-img-top card-img"
            alt="..."
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-6 border-right px-4">
              <h3 className="card-text fw-bold"> {product.title}</h3>
              <p className="card-text fw-bold"> Brand : {product.brand}</p>
              <p className="card-text fw-bold">Category : {product.category}</p>
              <p className="fw-light fw-bold">
                Description : {product.description}
              </p>
            </div>
            <div className="col-6 px-4">
              <h5 className="fw-light fw-bold text-success">
                Price : {product.price} INR
              </h5>
              <p className="fw-light fw-bold text-warning">
                Rating : {product.rating}
              </p>
              <p className="fw-light fw-bold text-success">
                Discount Percentage : {product.discountPercentage} %
              </p>
              <p className="fw-light fw-bold text-danger">
                Stock : Only {product.stock} left
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
