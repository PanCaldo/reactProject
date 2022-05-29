import { object } from "prop-types";
import React from "react";
import products from "../../Main/Products/products";
import "./cart.css";

//const produstsObject = products.reduce

const productObject = products.reduce(
  (sumProduct, product) => ({
    ...sumProduct,
    [product.id]: product,
  }),
  {}
);

const Cart = ({
    cartDataThree
}) => {
  return (
    <div className="cart text-center">
      {Object.keys(cartDataThree).map((id) => (
        <div key={id}>
          {products[id].name} : {cartDataThree[id]},
        </div>
      ))}
      Total:
          {
              Object.keys(cartDataThree).reduce((total, productsId)=>(
                total + (products[productsId].price*cartDataThree[productsId] )
              ),0)
      }
    </div>
  );
};

//{
//    Object.keys(cartDataThree).map((id) => (
//        <div key={id}>
//            {products[id-1].name} : {cartDataThree[id]}
//       </div>
//   ))
//}

export default Cart;
