import React from "react";
import { products } from "./Products";
import "./Product.css";

function Product() {
  return (
    <div className="container product-grid">
      <div className="row ">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <div className="card product-card my-3">
              <img
                className="card-img-top"
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={200}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <a href={product.buttonUrl} className="btn btn-primary">
                  Place order
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
