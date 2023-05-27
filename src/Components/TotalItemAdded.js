import React from "react";
const TotalItems = (props) => {
  const {
    reducer: { cardData },
  } = props;
  return (
    <>
      <h4>{`Total Item Added : ${cardData.length}`}</h4>
    </>
  );
};
export default TotalItems;
