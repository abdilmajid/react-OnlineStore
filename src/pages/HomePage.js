import React from 'react';

import ProductListing from '../features/product-listing';
import data from '../config/data/products.json';


const HomePage = (props) => {
  return (
    <div>
      <h1>HomePage</h1>{
      //Import data and pass as props to productListing Component
      }<ProductListing  products={data.products}/>
    </div>
  )
}



export default HomePage;