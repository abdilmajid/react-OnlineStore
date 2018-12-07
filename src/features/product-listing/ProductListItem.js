import React, { Component } from 'react';
import { Button, Collapse} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import Addbtn from './AddBtn';
import RemoveBtn from './RemoveBtn'

class ProductListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div className='product-list-item'>
        <h4>{this.props.product.name}</h4>
        <img
          height={100}
          title= {this.props.product.name}
          src= {this.props.product.image}
          alt='item'
        />
        <div className='price'>${this.props.product.price}</div>  
        <div>{
          // call function addToCart and pass argument props.product, this add the item to our state
        } <Addbtn 
              cartItem={this.props.cartItem}
              product={this.props.product}
              addToCart={this.props.addToCart}
            />
            {
              this.props.cartItem
                ? <div><RemoveBtn 
                  cartItem={this.props.cartItem}
                  product={this.props.product}
                  removeFromCart={this.props.removeFromCart}/>
                  <NavLink to='/cart'>
                  <Button className='go-checkout-home'>Go to cart</Button> 
                </NavLink></div>
                : null
            }
          <div>
            <Button
              className='item-details-button'
              bsStyle='link'
              onClick={() => this.setState({open: !this.state.open})}
              style={{outline: 'none'}}
            >
              {this.state.open === false ? `See` : `Hide`} item details
              {this.state.open === false ? ` +` : ` -`}
            </Button>
            <Collapse in={this.state.open}>
              
              <div className='item-info'>
              {this.props.product.description}
              </div>
              
            </Collapse>
          </div>  
        </div>
      </div>
    )
  }

}


export default ProductListItem;