import React from "react";

export default function Product(props) {
  return (
    <div
      className="row my-4 p-3"
      style={{
        border: "1px solid gray",
        borderRadius: "10px",
        alignItems: "center",
        backgroundColor: "#1c1c1c",
      }}
    >
      <div className="col-2">
        <img
          src={props.product.image}
          alt={props.product.name}
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>
      <div className="col-3">
        <h5>{props.product.name}</h5>
      </div>
      <div className="col-2">
        <span className="badge bg-secondary">₨{props.product.price}</span>
      </div>
      <div className="col-3">
        <div className="btn-group">
          <button
            className="btn btn-danger"
            onClick={() => props.decrementQuantity(props.index)}
          >
            -
          </button>
          <button className="btn btn-warning">{props.product.quantity}</button>
          <button
            className="btn btn-success"
            onClick={() => props.incrementQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>
      <div className="col-2">
        ₨{props.product.quantity * props.product.price}
      </div>
    </div>
  );
}
