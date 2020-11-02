import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://andoverleader.com/wp-content/uploads/2020/05/30-day-movie-challenge-1366x768-2.jpg"
          alt=""
        />
        <div className="home__row">
          <Product 
          id="34"
          title="The Lean Startup: How Constant Innovation 
          Creates Radically Successful Businesses Paperback"
          price={23}
          rating ={4}
          image = "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          
          />
          <Product 
            id="49528094"
            title="kenwood kMix Stand Mixer for 
            Barking, Stylish kitchen Mizer with 
            K-beater, Dough Hook and Whisk, 4 Litre 
            Glass Bowl"
            price={239.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
            id="4902850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          
          />
          <Product
          id="23445930"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61WhKTrn3kL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product 
          id="3254354345"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
          price={598.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product 
          id="90829332"
          title="Samsung LC49$G90SSUXEN 49' Curced LED GAming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
          price={1094.98}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
