import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
      {/* Product image */}
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      {/* Product title */}

      <h3 className="text-lg font-semibold mt-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Category */}
      <p className="text-sm text-gray-600">{product.category}</p>

      {/* Price */}
      <p className="text-sm font-semibold mb-1 text-green-700">
        Price: ${product.price}
      </p>
      {/* description */}
      <p className="text-sm text-gray-700 mb-2 mt-2">
        {product.description.length > 80
          ? product.description.slice(0, 100) + "..."
          : product.description}
      </p>

      {/* Add to Cart button */}
      <button
        onClick={() => onAddToCart(product)}
        className="bg-green-600 hover:bg-green-700 text-white w-full p-2 rounded-xl"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
