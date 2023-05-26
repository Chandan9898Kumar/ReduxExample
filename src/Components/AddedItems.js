import Phone from "../Assets/Phone.jpg";
const AddedItems = ({ item }) => {
  console.log(item, "item");
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
            //   onClick={() => {
            //     addToCartHandler({ pice: 1000, name: "i phone 11",id:Date.now() });
            //   }}
          >
            Remove From Cart
          </button>
        </div>
      </div>
    </>
  );
};
export default AddedItems;
