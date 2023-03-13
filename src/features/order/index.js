import React, { Component } from 'react';
import fetchApi from '../../modules/fetch-api';
import { Row , Col, Media } from 'react-bootstrap';



const apiCall = process.env.REACT_APP_API_CALL

class Order extends Component {
  constructor(props){
    super(props)
    this.state = {
      order: null,
    }
  }
  

  componentDidMount(){
    // console.log('get request')
    fetchApi('get', `${apiCall}/orders/${this.props.id}`)
      .then(json => {
        this.setState({
          order: json
        })
      })
  }

  renderOrder = () => {
    // all info coming from Api
    const { name, email, order_items } = this.state.order

    const orderTotal = order_items.reduce((all, item, index) => {
      const { qty, products: {price}} = item
      all += (qty * price);
      const total = parseFloat(all.toFixed(2))
      return total;
    }, 0)

    return (
      <div>
        <h3>Order info for {name}</h3>
        <div>Contact: { email }</div>
        <h4>Items</h4>
        <ul>
          {
            order_items && order_items.map(item => {
              const { qty, products: {name, image, price }} = item
              
              return (
              <div key={item.id}>
                <div className='item-info'>
                  <Media>
                    <Media.Left>
                      <img alt='' src={image} width={50}/>
                    </Media.Left>
                    <Media.Body>
                      <p>{name}</p>
                      <p>Qty:{qty}  Cost: ${parseFloat(qty) * parseFloat(price)}</p>
                    </Media.Body>
                    <Row className='show-grid'>
                      <Col md={6}>
                        <strong>${price}</strong>
                      </Col>
                    </Row>
                  </Media>
                </div>
              </div>
              
              )
            })
          } 
        </ul>
        <h3>Purchase Total: ${orderTotal}</h3>
      </div>
    )
  }

  render() {
    const { order} = this.state
    return (
      <div>
        {
          order ? this.renderOrder() : 'Loading...'
        }
      </div>
    )
  }
}


export default Order;
