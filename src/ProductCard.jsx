import React from "react";

const ProductCard = ({ image, name, price }) => {
  return (
    <div
      style={{
        width: "25%",
        padding: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <img src={image} alt="" style={{ width: "100%", height: "300px" }} />
      <h3>{name}</h3>
      <h4 style={{ color: price > 50000 ? "red" : "skyblue" }}>Rs.{price}</h4>
    </div>
  );
};

export default ProductCard;
