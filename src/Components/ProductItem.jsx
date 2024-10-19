import React from 'react'
import useBasket from '../store/useBasket'

const ProductItem = ({data}) => {
    const {name , price , imageSrc} = data
    const {addToBasket} = useBasket((state)=>state)

  return <div className='flex flex-col justify-center items-center mt-10 bg-white m-20 rounded-lg p-3'>
    <img src={imageSrc} alt={name} className='w-72' />
    <h2 className='text-xl'>{name}</h2>
    <div className='m-2'>
        <p className='font-bold'>price:{price}$</p>
    </div>
    <button onClick={()=>addToBasket(data)} className='bg-green-500 p-2 rounded-md text-white'>add Basket</button>

  </div>
}

export default ProductItem