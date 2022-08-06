import { connect } from 'react-redux'

export function getProduct() {
   return {
      type: 'GETPRODUCT',
   }
}
export function resetGetProduct() {
  return { type: 'RESET_GETPRODUCT' }
}

const Product = (state) => {
   return (dispatch) => {
		dispatch(getProduct(state));
      dispatch(resetGetProduct(state));
	}
}

 export { Product };