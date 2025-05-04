import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ProductList />
      </BrowserRouter>
    </>
  );
}

export default App;
