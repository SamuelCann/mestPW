import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/products");
      const { products } = await res.json();
      setProducts(products);
    };
    fetchData();
  }, []);

  console.log(products);

  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src=" https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          {products &&
            products.map((product, idx) => (
              <Product
                id={product._id}
                title={product.title}
                price={product.price}
                rating={5}
                image={product.image}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
