import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div style={ { display:"flex", alignItems: "center", fontSize: "1.2rem", color:"#fff"}}>
        <ShoppingCartIcon/>
        <span>2</span>
    </div>
  )
}

export default CartWidget