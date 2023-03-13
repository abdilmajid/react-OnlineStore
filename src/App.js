import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Router from './Router';
import Navigation from './Navigation';


class App extends Component {
  render() {
    return (
      <div className='page-container'>
        <Navigation {...this.props}/>
        <Router />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}


export default withRouter(connect(mapStateToProps)(App));
