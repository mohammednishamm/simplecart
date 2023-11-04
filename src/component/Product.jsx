import React, { useContext } from 'react'
import { PRODUCTS } from '../Data'
import { Shopcontext } from './Shopcontext'

const Product = () => {
    const {cartItems,addToCart}=useContext(Shopcontext)
  return (
    <div>


        {
            PRODUCTS.map((item)=>{
                return (
                    <div>
                        <img src={item.img} alt="" />
                        <button onClick={()=>addToCart(item.id)}>Add to cart</button>
                        <p>{cartItems[item.id]}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Product