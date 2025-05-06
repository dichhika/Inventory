import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 flex justify-around p-2  text-white text-xl sticky top-0">
      <div className="text-2xl">
        <span className="text-black">Inven</span>tory
      </div>
      <div className="flex gap-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex gap-5">
        <Button>Login</Button>
        <Button>Sign Up</Button>

        <NavLink to="/viewcart">
          <Button>View Cart</Button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
