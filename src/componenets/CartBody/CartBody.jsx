import React from "react";
import PropTypes from "prop-types";

function Cart({ cartItems = [] }) {
  // Calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
              <div className="flex-1 ml-4">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-gray-600">Price: ${item.price.toFixed(2)}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="flex justify-between items-center mt-4 font-bold text-lg">
          <span>Total:</span>
          <span>${calculateTotal()}</span>
        </div>
      )}

      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
        disabled={cartItems.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}

// Prop validation
Cart.propTypes = {
  cartItems: PropTypes.array
};

export default Cart;
