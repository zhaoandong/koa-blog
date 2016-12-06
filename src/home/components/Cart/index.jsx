import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getCartProducts } from '../../reducers/index.jsx'

class Cart extends Component {
  render() {

    const { products,quantityById } = this.props;
    return (
      <div>
        <h3>Your Cart</h3>
        {
          products.map(function(item){
            return (
              <div key={ item.id }>
                id: { item.id } &nbsp;&nbsp;
                title : { item.title } &nbsp;&nbsp;
                price : { item.price } &nbsp;&nbsp;
                count : { quantityById[item.id] }
              </div>)

          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: getCartProducts(state),
    quantityById: state.cart.quantityById
  }
}



export default connect(
  mapStateToProps
)(Cart)