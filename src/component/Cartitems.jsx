import React, { useContext } from 'react'
import { Shopcontext } from './Shopcontext'

const Cartitems = (props) => {

    const {id,name,img}=props.data
    const {removeFromCart}=useContext(Shopcontext)
  return (
    <div>

        <img src={img} alt="" />

        <button onClick={()=>removeFromCart(id)}>remove</button>
    </div>
  )
}

export default Cartitems