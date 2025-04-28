import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  const products = [
    { price: 299999, name: "iPhone 14 Pro Max", quantity: 0, details: "6.7-inch display, A15 Bionic chip, 5G" },
    { price: 29999, name: "Techno Pova 4", quantity: 0, details: "6.8-inch display, 50MP camera, 6GB RAM" },
    { price: 159999, name: "Samsung Galaxy S23", quantity: 0, details: "6.1-inch display, Snapdragon 8 Gen 2, 12GB RAM" },
    { price: 89999, name: "OnePlus 11R", quantity: 0, details: "6.7-inch display, 50MP camera, 8GB RAM" },
    { price: 74999, name: "Google Pixel 7a", quantity: 0, details: "6.1-inch display, Tensor G2 chip, 6GB RAM" },
    { price: 49999, name: "Xiaomi Redmi Note 13 Pro", quantity: 0, details: "6.67-inch display, 108MP camera, 6GB RAM" },
    { price: 64999, name: "Realme GT Neo 3", quantity: 0, details: "6.7-inch display, 50MP camera, 8GB RAM" },
    { price: 39999, name: "Infinix Zero 30", quantity: 0, details: "6.78-inch display, 108MP camera, 8GB RAM" },
    { price: 15999, name: "Vivo Y15s", quantity: 0, details: "6.51-inch display, 13MP camera, 3GB RAM" },
    { price: 24999, name: "Oppo A16", quantity: 0, details: "6.52-inch display, 13MP camera, 4GB RAM" },
    { price: 84999, name: "Sony Xperia 1 IV", quantity: 0, details: "6.5-inch display, Snapdragon 8 Gen 1, 12GB RAM" },
    { price: 49999, name: "Huawei Nova 9", quantity: 0, details: "6.57-inch display, 50MP camera, 8GB RAM" },
    { price: 74999, name: "Motorola Edge 30", quantity: 0, details: "6.7-inch OLED display, Snapdragon 778G, 8GB RAM" },
    { price: 119999, name: "Asus ROG Phone 6", quantity: 0, details: "6.78-inch AMOLED display, Snapdragon 8 Gen 1, 16GB RAM" },
    { price: 37999, name: "Honor X8", quantity: 0, details: "6.7-inch display, 64MP camera, 6GB RAM" },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  let [paymentDetails, setPaymentDetails] = useState(null);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price, details) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,
      quantity: 0,
      details: details,
    });
    setProductList(newProductList);
  };

  const handlePayment = () => {
    const selectedProducts = productList.filter((product) => product.quantity > 0);
    setPaymentDetails({
      total: totalAmount,
      products: selectedProducts,
    });
  };

  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <main className="container mt-5">
        <h1>Mobile Verse</h1>
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
        <button className="btn btn-primary mt-4" onClick={handlePayment}>
          Pay Now
        </button>

        {paymentDetails && (
          <div className="mt-5">
            <h3>Payment Summary</h3>
            <h4>Total Amount: ₨{paymentDetails.total}</h4>
            <ul>
              {paymentDetails.products.map((product, index) => (
                <li key={index}>
                  {product.name} - Quantity: {product.quantity} - ₨{product.price * product.quantity}
                </li>
              ))}
            </ul>
            <p><b>Thanks for trusting Mobile Verse!</b></p>
          </div>
        )}
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </div>
  );
}

export default App;
