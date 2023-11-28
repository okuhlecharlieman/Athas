import React from "react";
import { products } from "./Products";

function Product() {
  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card">
                <img
                  className="card-img-top"
                  src={product.imageUrl}
                  alt={product.name}
                />

                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <a href="#" className="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
