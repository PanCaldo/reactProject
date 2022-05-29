import React from "react";
import ProductListItem from "./productListItem";
import "./ProductListItem.css"
import products from "./products";

const ProductList = ({
    cartDataProopsTwo
}) => {
    return (
        <>
            <h2 className="page-title">Product List</h2>

            <div className="row">
                {
                    products.map(({
                        id,
                        name,
                        description,
                        type,
                        capacity,
                        price,
                        image,
                    }) => (
                    <div className="col-lg-6" key={id} >
                            <ProductListItem
                                cartDataProopsThree={cartDataProopsTwo}
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                id = {id}
                         />
                    </div>
                ))
                }

            </div>
        </>
    )
}

export default ProductList