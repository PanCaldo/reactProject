import { object } from 'prop-types';
import React from 'react'

import "./cart.css";

const Cart = ({cartDataThree}) => {
    return (
        <div className="cart text-center">
            {
                Object.keys(cartDataThree).map((id) => (
                    <div key={id}>
                        {id} : {cartDataThree[id]}
                   </div>
               ))
            }
            {/*<div className="products-count">{}</div>
            <div className="products-price">${cartDataThree[1]}</div>*/}
        </div>
    )
}


export default Cart
