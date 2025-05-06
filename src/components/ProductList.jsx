import React, { useEffect, useState, useContext } from "react";
import { Input } from "./ui/input";
import Product from "./Product";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CartContext } from "../Pages/CartContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchBy, setSearchBy] = useState("title");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
        setFiltered(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  const handlePriceChange = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  useEffect(() => {
    let result = [...products];

    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    if (searchText.trim() !== "") {
      result = result.filter((p) => {
        const value = p[searchBy];
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    }

    result = result.filter((p) => {
      const aboveMin = minPrice === "" || p.price >= parseFloat(minPrice);
      const belowMax = maxPrice === "" || p.price <= parseFloat(maxPrice);
      return aboveMin && belowMax;
    });

    setFiltered(result);
  }, [searchText, searchBy, selectedCategory, minPrice, maxPrice, products]);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4 text-red-500">{error.message}</div>;

  return (
    <div className="p-4">
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6 items-center">
        <Input
          type="text"
          placeholder={`Search by ${searchBy}`}
          value={searchText}
          onChange={(e) => handleSearchTextChange(e.target.value)}
          className="w-full sm:w-1/2"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Search by: {searchBy}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {["title", "description"].map((key) => (
              <DropdownMenuItem key={key} onClick={() => setSearchBy(key)}>
                {key}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Category: {selectedCategory}</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <Input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => handlePriceChange(e.target.value, maxPrice)}
          className="w-full sm:w-40"
        />
        <Input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => handlePriceChange(minPrice, e.target.value)}
          className="w-full sm:w-40"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
