import React from "react";
import "../App.css";
import Phone from "../Assets/Phone.jpg";
import AddedItems from "./AddedItems";
const Home = (props) => {
  const {
    addToCartHandler,
    removeFromCart,
    reducer: { cardData },
  } = props;

  let date = Date.now();
  let priceOfItem = date.toString().slice(8);
  return (
    <>
      <div className="cart-wrapper">
        <div className="itemToBeAdded">
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
              onClick={() => {
                addToCartHandler({
                  price: priceOfItem,
                  name: "i-phone 11",
                  id: Date.now(),
                });
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>

        <div className="addedComponent">
          <div>Items Added</div>
          {cardData &&
            cardData.length > 0 &&
            cardData.map((item, ind) => {
              return (
                <AddedItems
                  key={ind}
                  item={item}
                  removeFromCart={removeFromCart}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Home;
