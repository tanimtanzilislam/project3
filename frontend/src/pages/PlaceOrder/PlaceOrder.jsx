import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const{getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
           <p className="title">Delivery Information</p>
           <div className="multi-field">
            <input type="text" placeholder='First name'/>
            <input type="text" placeholder='Last name'/>
           </div>
           <input type="email" placeholder='Email address'/>
           <input type="text" placeholder='street'/>
           <div className="multi-field">
            <input type="text" placeholder='city'/>
            <input type="text" placeholder='state'/>
           </div>
           <div className="multi-field">
            <input type="text" placeholder='Zip code'/>
            <input type="text" placeholder='Country'/>
           </div>
           <input type="text" placeholder='Phone' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount===0?0:getTotalCartAmount()+5}</p>
            </div>
          </div>
          <button >PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder