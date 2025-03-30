# **Smart Shopping Cart - E-commerce Application**  

## **📌 Introduction**  
The **Smart Shopping Cart** is a feature-rich **React** e-commerce application designed for a seamless shopping experience. It leverages **React Hooks, Context API, React Router, and Redux** for efficient state management and navigation. Users can browse products, add them to the cart, update quantities, and complete purchases through a checkout process.

---

## **📜 Features**  
### **🛒 Home Page (`/`)**
- Displays a list of products with their **name, image, price, and "Add to Cart" button**.
- A **search bar** to filter products by name.
- **Cart Summary** showing the total number of items and the total price.
- Clicking on a product navigates to the **Product Details Page**.

### **📦 Product Details Page (`/product/:id`)**
- Displays detailed information about a selected product.
- Shows either an **"Add to Cart" or "Remove from Cart"** button based on the product’s status in the cart.
- A **"Go Back" button** to return to the Home page.

### **🛍️ Cart Page (`/cart`)**
- Lists all products added to the cart with their **name, price, and quantity**.
- Allows users to **update product quantity** or **remove items** from the cart.
- Displays the **total price and total items**.
- A **"Checkout" button** that clears the cart and navigates to the **Checkout Confirmation Page**.

### **✅ Checkout Confirmation Page (`/checkout`)**
- Displays a **message confirming the order**.
- Includes a **"Continue Shopping" button** to return to the **Home Page**.

### **👤 User Profile Page (`/profile`)**
- Displays and allows editing of the user’s **username, email, and address**.

---

## **🛠️ Technology Stack**
### **📌 Frontend**
- **React** (Functional Components & Hooks)
- **React Router** (for navigation)
- **Redux** (for global cart state management)
- **Context API** (for user data management)
- **CSS (or Tailwind/Bootstrap)** for styling

### **📌 Backend (Mock Data)**
- A **mock API** (hardcoded JSON data) is used for product listings.

---

## **📂 Project Structure**
```
smartshopping-cart/
│── src/
│   │── components/        # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── ProductCard.js
│   │── pages/             # Page components
│   │   ├── Home.js
│   │   ├── ProductDetails.js
│   │   ├── Cart.js
│   │   ├── Checkout.js
│   │   ├── Profile.js
│   │── redux/             # Redux store & slices
│   │   ├── store.js
│   │   ├── cartSlice.js
│   │── context/           # Context API (User data)
│   │   ├── UserContext.js
│   │── assets/            # Static assets (images, etc.)
│   │── App.js             # Main application component
│   │── index.js           # React entry point
│── public/                # Static files (index.html, favicon, etc.)
│── package.json           # Dependencies & scripts
│── README.md              # Documentation (this file)
```

---

## **🔗 Routing Structure**
| Route           | Description |
|----------------|------------|
| `/` | Home page with product listing |
| `/product/:id` | Product details page |
| `/cart` | Cart page displaying selected items |
| `/checkout` | Checkout confirmation page |
| `/profile` | User profile page |

---

## **🛠️ State Management**
### **🔹 Redux (Cart Management)**
- **cartSlice.js**: Handles adding, removing, and updating cart items.
- **store.js**: Manages global state.

### **🔹 Context API (User Management)**
- **UserContext.js**: Stores and manages **user data** (username, email, address).

---

## **⚙️ Installation & Setup**
### **🔹 Prerequisites**
- Install **Node.js** (v16+)
- Install **npm** or **yarn**

### **🔹 Clone the Repository**
```sh
git clone https://github.com/your-username/smartshopping-cart.git
cd smartshopping-cart
```

### **🔹 Install Dependencies**
```sh
npm install
```

### **🔹 Start the Development Server**
```sh
npm start
```
🚀 The app will be available at **`http://localhost:3000`**.

---

## **📌 Code Breakdown**
### **🔹 `index.js` (Entry Point)**
```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { UserProvider } from "./context/UserContext";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </Provider>
);
```

---

### **🔹 `App.js` (Main Component)**
```javascript
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
```

---

### **🔹 `cartSlice.js` (Redux)**
```javascript
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0, totalItems: 0 },
  reducers: {
    addToCart: (state, action) => { /* logic here */ },
    removeFromCart: (state, action) => { /* logic here */ },
    updateQuantity: (state, action) => { /* logic here */ },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
```

---

## **🌟 Features to Improve**
- 🔹 **User Authentication (Login/Register)**
- 🔹 **API Integration (Fetch products from a real database)**
- 🔹 **Payment Gateway for Online Payments**
- 🔹 **Dark Mode for Better UX**

---

## **🎯 Conclusion**
This **Smart Shopping Cart** project is a great foundation for building **full-stack e-commerce applications** using **React, Redux, and Context API**. The modular structure ensures scalability and easy integration of new features.  

🚀 **Happy Coding!** 🚀  

---

## **📌 Author & Contribution**
- **Author:** [Mayur Rastogi]
- **GitHub:** [mayurcoding]
