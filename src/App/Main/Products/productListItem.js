import React, { Component } from "react";
import PropTypes from 'prop-types';

class ProductListItem extends Component {

    state = {
        productCount: 1,
        color: "Green",
        zapah: "vonishe",
    }

    onIncrementClick() {
        this.setState((predProductCount) => ({
            productCount: predProductCount.productCount +1,
     }))
 }

    onDecrementClick() {
        this.setState(predProductCount => ({
            productCount: predProductCount.productCount -1,
 }))
}


changeColor() {
    this.setState((predColor)=>(
        predColor.color === "Red" ? {color: "Green"} : {color: "Red"}
    ))
    }

    //addCount = (count,price) => {
    //    this.setState((prevCount) => ({
    //      cartData: {
    //        count: prevCount.cartData.count + count,
    //        price: prevCount.cartData.price +(count*price), 
    //      }
    //    })
    //    );
    //  }
    
    
    
    

    
    render() {

        const {
            id,
            cartDataProopsThree,
            name,
            description,
            type,
            capacity,
            price,
            image,
        } = this.props;


        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt="{name}" />
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <p>Color: {this.state.color} {this.state.zapah}</p>
                <button
                    onClick={() => this.changeColor()}>Change color</button>
                <div className="product-features">{type}</div>
                <div className="product-features">{capacity}</div>
                <div className="product-price">${price}</div>
                <div className="product-quantity">
                    <button
                        onClick={() => this.onDecrementClick()}
                        disabled = {this.state.productCount <= 1}
                    >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button
                        onClick={() => this.onIncrementClick()}
                    >+</button>
                </div>
                <button className="btn-add-to-cart"
                onClick={() => cartDataProopsThree(id,this.state.productCount)}
                >Add to cart</button>
            </div>
        )
    }
}



 
//const ProductListItem = ({
//    name,
//    description,
//    type,
//    capacity,
//    price,
//    image,
//}) => {
//    return (
//        <div className="product-list-item">
//            <div className="product-img">
//                <img src={image} alt="{name}" />
//            </div>
//            <div className="product-title">{name}</div>
//            <div className="product-description">{description}</div>
//            <div className="product-features">{type}</div>
//            <div className="product-features">{capacity}</div>
//            <div className="product-price">${price}</div>
//            <div className="product-quantity">
//                <button>-</button>
//                <input type="text" value="1" readOnly/>
//                <button>+</button>
//            </div>
//            <button className="btn-add-to-cart">Add to cart</button>
//        </div>
//    )
//}

ProductListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductListItem.defaultProps ={

    description: "No description",
    image:"images/no-image.png"
}

export default ProductListItem