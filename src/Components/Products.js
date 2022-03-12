import React from "react";
import { data } from "./../data";
import Product from "./Product";

export default function Products() {
  return (
    <div className="flex justify-center p-3 flex-wrap gap-3">
      {data.map((item) => (
        <div key={item.id}>
          <Product item={item} />
        </div>
      ))}
    </div>
  );
}
