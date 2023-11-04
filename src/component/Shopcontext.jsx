import React, { useState } from 'react'
import { createContext } from 'react'
import { PRODUCTS } from '../Data'



export const Shopcontext=createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0

    }
    return cart;
}



export const Shopcontextprovider = (items) =>{

    const [cartItems,setCartItems]=useState(getDefaultCart())


    const addToCart= (itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid] + 1}))
    }




    const removeFromCart=(itemid)=>{
        setCartItems((prev)=>({...prev,[itemid]:prev[itemid] - 1}))
    }




    const sample={cartItems,addToCart,removeFromCart}

    return (
        <Shopcontext.Provider value={sample}>{items.children}</Shopcontext.Provider>
    )




}