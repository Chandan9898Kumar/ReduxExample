import React from "react";
import "../App.css";
import Phone from "../Assets/Phone.jpg";

const Home = () => {
  return (
    <>
      <div className="cart-wrapper">
        <div className="img-wrapper">
          <img src={Phone} alt="phone" />
        </div>

        <div className="item">
          <span>I-Phone</span>
          <br />
          <span>Price: $1000.00</span>
        </div>

        <div className="btn-wrapper">
          <button
            className="btn"
            //   onClick={() => {
            //     props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            //   }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default Home;
