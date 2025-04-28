import React, { useState } from "react";

function AddItem({ addItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (name && price) {
      addItem(name, parseInt(price));
      setName("");
      setPrice("");
    }
  };

  return (
    <div className="mb-4">
      <h3>Add a New Product</h3>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Enter product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="form-control mb-2"
        placeholder="Enter product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button className="btn btn-success" onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default AddItem;
