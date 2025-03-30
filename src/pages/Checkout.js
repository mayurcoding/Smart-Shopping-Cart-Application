import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Clear the cart when checkout page is loaded
  React.useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div>
      <h2>Order Confirmed!</h2>
      <p>Thank you for your purchase. Your order has been placed successfully.</p>
      <button onClick={() => navigate("/")}>Continue Shopping</button>
    </div>
  );
};

export default Checkout;
