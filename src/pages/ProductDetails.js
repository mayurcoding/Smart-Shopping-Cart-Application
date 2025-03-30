import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/cartSlice";
import products from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = products.find((p) => p.id === parseInt(id));
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isInCart = cartItems.some((item) => item.id === product.id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "150px" }} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>

      {isInCart ? (
        <button onClick={() => dispatch(removeFromCart(product.id))}>Remove from Cart</button>
      ) : (
        <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
      )}

      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default ProductDetails;
