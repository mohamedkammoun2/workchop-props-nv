import React from 'react'
import ProductCard from './ProductCard'

const ProductList = (props) => {
    console.log(props)
  return (
    <div>
        {
            props.list.map((product,i)=><ProductCard  item={product} key={i} alertFunction={props.alertFunction} />)
        }
    </div>
  )
}

export default ProductList