import React, { useEffect } from "react";
import ProductCardApi from "./ProductCardApi";
import axios from "axios";
import { useState } from "react";

function ProductListApi() {
const [product,setProduct]=useState([]);

  useEffect(()=>{
  axios.get("https://fakestoreapi.com/products")
  .then(res=> setProduct(res.data))
  },[])

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          
          {
            product.map((value,index)=>{
               return(
                  <ProductCardApi value={value}/>
               )
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductListApi;
