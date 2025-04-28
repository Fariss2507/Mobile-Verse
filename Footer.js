import React from "react";

function Footer({ totalAmount, resetQuantity }) {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div>
        <p>Total Amount: ₨{totalAmount}</p>
        <button onClick={resetQuantity} className="btn btn-danger">Reset Cart</button>
      </div>
      <p>&copy; 2025 Mobile Verse. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
