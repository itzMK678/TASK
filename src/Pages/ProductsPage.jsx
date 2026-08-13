import React from "react";
import {usestate} from "react";
import products from "../data"; 
import Objcard from "../Components/Objcard";
import Banner from "../Components/Banner";

const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = usestate(null);
const categories={
  All,Body kits , Engine parts , assecsories 
}
  return (
    <div className="p-6">
      <Banner/>

      <div> 
<div.map></div>
      </div>
      <div className="mt-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Objcard key={item.id} obj={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
