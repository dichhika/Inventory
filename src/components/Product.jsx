import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Product = ({ product }) => {
  return (
    <Card key={product.id} className="p-4">
      <CardHeader>
        <CardTitle className="text-base">{product.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={product.image}
          alt={product.title}
          className="h-32 w-full object-contain mb-2"
        />
        <p className="text-sm font-semibold mb-1 text-green-700">
          Price: ${product.price}
        </p>
        <p className="text-sm text-gray-700 mb-2">{product.description}...</p>
        <div className="flex justify-between mt-2">
          <Button className="bg-green-600 hover:bg-green-700 text-white">
            Update
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
