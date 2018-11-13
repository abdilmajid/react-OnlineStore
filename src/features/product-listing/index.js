import React from 'react';
import ProductListItem from './ProductListItem';

const ProductListing = (props) => {
  return (
    <div className='product-listing'>
      {
        props.products.map((product) => {
            return (
              <ProductListItem product={product}/>
            )
        })
      }
    </div>
  )
}


export default ProductListing;