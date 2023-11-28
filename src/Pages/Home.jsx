// Home.js
import React from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="m-4">
        {" "}
        <Product />
      </div>
    </div>
  );
}

export default Home;
