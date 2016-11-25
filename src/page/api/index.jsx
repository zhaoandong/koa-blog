/**
 * Mocking client-server processing
 */
import _products from './product.json'



const TIMEOUT = 100

export default {
  getProducts(cb, timeout) {

  	setTimeout(() => {

  		return cb(_products);

  	},100)


  },

  buyProducts(payload, cb, timeout) {
    setTimeout(() => cb(), timeout || TIMEOUT)
  }
}
