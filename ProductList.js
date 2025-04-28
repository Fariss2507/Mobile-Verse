import React from "react";

function ProductList({ productList, incrementQuantity, decrementQuantity, removeItem }) {
  return (
    <div className="row">
      {productList.map((product, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.details}</p>
              <p className="card-text">₨{product.price}</p>
              <div>
                <button onClick={() => decrementQuantity(index)} className="btn btn-danger me-2">-</button>
                {product.quantity}
                <button onClick={() => incrementQuantity(index)} className="btn btn-success ms-2">+</button>
                <button onClick={() => removeItem(index)} className="btn btn-warning ms-3">Remove</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
