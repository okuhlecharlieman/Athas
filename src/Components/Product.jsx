import React from "react";
import { products } from "./Products";

function Product() {
  return (
    <div>
      {" "}
      <div className="container my-5">
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
                  <a
                    href="https://buy.stripe.com/test_7sI9Ecbc0faH3io8wz"
                    className="btn btn-primary"
                  >
                    Place oder
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
