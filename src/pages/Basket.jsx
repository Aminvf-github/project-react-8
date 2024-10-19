import React from 'react'
import useBasket from '../store/useBasket'
import Basketitem from '../Components/Basketitem'

const Basket = () => {
  const {items , invoice} = useBasket((state)=>state)
  return <div className='pb-10'>
    <p className=' font-bold text-2xl text-center pt-10'>
      total price💸: {invoice.totalprice}$
    </p>
    {items.map((item)=> <Basketitem key={item.id} data={item} />)}
  </div>
}

export default Basket