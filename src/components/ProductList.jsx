import React, { createContext, useState } from "react";
import ProductCard from "./ProductCard";

const data = createContext();

function productList(props) {
 
  const [cart,setCart]=useState([]);

  const AddCart=(id)=>{
    console.log(id)
      // let temp=[...cart]
      // temp.push()
  }

  const productlist= 
  [
    {
        "productId": 1,
        "id": 1,
        "title": "Cotton t-shirt",
        "body": "quia et",
        "imgUrl":"https://png.pngtree.com/png-clipart/20201209/original/pngtree-cotton-short-sleeve-t-shirt-png-image_5625083.jpg"
    },
    {
        "productId": 2,
        "id": 2,
        "title": "Cotton t-shirt",
        "body": "est rerum",
        "imgUrl":"https://png.pngtree.com/png-clipart/20201209/original/pngtree-summer-t-shirt-png-image_5617067.jpg"
    },
    {
        "productId": 3,
        "id": 3,
        "title": "Cotton t-shirt",
        "body": "est rerum",
        "imgUrl":"https://png.pngtree.com/png-clipart/20190611/original/pngtree-white-t-shirt-png-image_2005822.jpg"
    }
];

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          
          {
            productlist.map((value,index)=>{
               return(
                  <ProductCard value={value}/>
               )
            })
          }
        </div>
      </div>
    </>
  );
}
export default productList;
