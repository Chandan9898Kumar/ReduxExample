import Phone from "../Assets/Phone.jpg";
import { memo } from "react";
import "../App.css";
const AddedItems = ({ item, removeFromCart }) => {
  return (
    <>
      <div className="itemToBeAdded">
        <div className="img-wrapper">
          <img src={Phone} alt="phone" />
        </div>

        <div className="item">
          <span>{item.name}</span>
          <br />
          <span>Price: ${item.price}</span>
        </div>

        <div className="btn-wrapper">
          <button
            className="btn"
            onClick={() => {
              removeFromCart(item);
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    </>
  );
};
export default memo(AddedItems);
