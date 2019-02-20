// increment likes
// export function fetchProducts() {
//     return dispatch => {
//         dispatch(fetchProductsBegin());
//         return fetch("/products")
//           .then(handleErrors)
//           .then(res => res.json())
//           .then(json => {
//               dispatch(fetchProductsSuccess(json.products));
//               return json.products;
//           })
//           .catch(error => dispatch(fetchProductsFailure(error)));
//     };
// }

// Handle HTTP errors since fetch will not.
// function handleErrors(response) {
//     if(!response.ok) {
//         throw Error(response.status.Text);
//     }
//     return response;
// }

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

export const fetchDataStart = () => ({
    type: FETCH_DATA_START
});

export const receiveData = data => ({
    type: RECEIVE_DATA,
    payload: { data }
});

export const fetchDataError = error => ({
    type: FETCH_DATA_ERROR,
    payload: { error }
});

