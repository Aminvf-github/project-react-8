import React from 'react'
import useBasket from '../store/useBasket'

const Basketitem = ({data}) => {
    const {name , price , imageSrc , quantity} = data
    const {removeBasket} = useBasket((state)=>state)

  return <div className='flex flex-col justify-center items-center mt-10 bg-white m-20 rounded-lg p-3 mb-0'>
    <img src={imageSrc} alt={name} className='w-72' />
    <h2 className='text-xl'>{name}</h2>
    <div className='m-2'>
        <p className='font-bold'>price:{price}$</p>
        <p className='font-bold'>QTY:{quantity}</p>
    </div>
    <button onClick={()=>removeBasket(data)} className='bg-red-500 p-2 rounded-md text-white'>remove</button>
    </div>
}

export default Basketitem