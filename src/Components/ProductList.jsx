import React from 'react'
import products from "../Constans/data"
import ProductItem from './ProductItem'


const ProductList = () => {
  return <div className='grid grid-cols-3 grid-rows-2 '>
    {products.map((item)=> <ProductItem  data={item} key={item.id}/> )}
  </div>
}

export default ProductList