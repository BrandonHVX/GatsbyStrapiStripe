import React, {createContext, useState} from 'react'

import {getCart, saveCart} from '../utils/cart'

export const CartContext = createContext(null)

export default ({children}) => {
    const [cart, setCart] = useState(getCart())

    const updateCart = (updatedCart) => {
        setCart(updatedCart)
        saveCart(updatedCart)
    }

    const addToCart = (product, qty = 1) => {
        const copy = [...cart]
        //If the product is already there
        const indexOfProduct = copy.findIndex((alreadyInCart) => 
            alreadyInCart.strapiId  === product.strapiId
        )
    
        if(indexOfProduct !== -1){
            //Update the quantity
            copy[indexOfProduct].qty += parseInt(qty)
    
            if(copy[indexOfProduct].qty === 0){
                //Remove the product from the cart
                copy.splice(indexOfProduct, 1)
            }
    
        } else {
            //Set the qty 1 
            product.qty = parseInt(qty)
    
            //Push the product
            copy.push(product)
        }
        
        updateCart(copy)
    }

    const clearCart = () => {
        const updatedCart = []
        updateCart(updatedCart)
    }


    const removeItem = (product) => {
        const copy = [...cart]
        //If the product is already there
        const indexOfProduct = copy.findIndex((alreadyInCart) => 
            alreadyInCart.strapiId  === product.strapiId
        )
        if(copy[indexOfProduct].qty < 1){
       
            copy.splice(indexOfProduct, 1)
    
           
    
        } else {
            copy.splice(indexOfProduct, 1)
        }
        
        updateCart(copy)

    }


    

    const productInCart = (product, qty = 1) => {
        const copy = [...cart]
        //If the product is already there
        const indexOfPickUp = copy.findIndex((PickUpInCart) => 
        PickUpInCart.strapiId  >= 5
        )

        const indexOfDelivery = copy.findIndex((deliveryInCart) => 
        deliveryInCart.strapiId >= 4
    )
    
        if(indexOfPickUp && indexOfDelivery  > 0){
           
            alert('Pickup Already Added To Cart');
            
    

        } else {
            //Set the qty 1 
            product.qty = parseInt(qty)
    
            //Push the product
            copy.push(product)
        }
        
        updateCart(copy)
    }



    return(
        <CartContext.Provider value={{cart, addToCart, clearCart,removeItem, productInCart}}>
            {children}
        </CartContext.Provider>
    )

}