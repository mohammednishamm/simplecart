import React, { useContext } from 'react'
import { PRODUCTS } from '../Data'
import { Shopcontext } from './Shopcontext'
import Product from './Product'
import Cartitems from './Cartitems'

const Cart = () => {

    const {cartItems,addToCart}=useContext(Shopcontext)
  return (
    <div>
        {
            PRODUCTS.map((product)=>{
              

                    if(cartItems[product.id] !==0){
                         
                        return(
                            <Cartitems data={product}/>
                        )

                    }
                
            })
        }


    </div>
  )
}

export default Cart