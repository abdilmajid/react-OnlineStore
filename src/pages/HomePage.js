import React from 'react';
import ProductListing from '../features/product-listing';

const HomePage = (props) => {
  return (
    <div>
      <h1>Home Page</h1>{
      //Import data and pass as props to productListing Component
      }<ProductListing />
    </div>
  )
}



export default HomePage;