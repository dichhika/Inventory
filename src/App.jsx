import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import { CartProvider } from "./pages/CartContext";
import Cart from "./components/Cart";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <ToastContainer position="top-center" />
          <Routes>
            <Route path="/viewcart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
