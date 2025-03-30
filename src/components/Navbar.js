import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart</Link> | 
      <Link to="/profile">Profile</Link> | 
      <span>Welcome, {user.name}!</span>
    </nav>
  );
};

export default Navbar;
