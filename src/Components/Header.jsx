import React from 'react'
import { NavLink } from 'react-router-dom'
import useBasket from '../store/useBasket'

const Header = () => {
  const {items} = useBasket((state)=>state);
  const totalItems =items.reduce((acc , curr)=> acc + curr.quantity , 0)

  return <div className='w-full flex  flex-grow justify-around bg-white pb-5 rounded-b-lg'>
 
    <NavLink to="/" className={({isActive , isPending})=>isActive ? "text-blue-500" : isPending ? "text-gray-500" : ""}>
     <h2 className='font-extrabold text-4xl'>🏠Home</h2> 
     </NavLink>

    <NavLink to="/Basket" className={({isActive , isPending})=>isActive ? "text-blue-500" : isPending ? "text-gray-500" : ""}>
    <h2 className='font-extrabold text-4xl'>Basket {totalItems}🛒</h2>
    </NavLink>
  </div>
}

export default Header