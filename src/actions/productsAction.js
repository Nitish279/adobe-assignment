import { FETCH_PRODUCTS } from './types';

export const fetchProducts = () => (dispatch) => {
  fetch('https://api.myjson.com/bins/qhnfp')
    .then((resp) => resp.json())
    .then(data => {

      dispatch({ type: FETCH_PRODUCTS, payload: data });
    })
    .catch(err => {
      console.log(err)
    })
};