export const ADD_PRODUCT = 'PRODUCT/ADD_PRODUCT';
export const REMOVE_PRODUCT = 'PRODUCT/REMOVE_PRODUCT';

export const addProduct = product => {
  return {
    type: ADD_PRODUCT,
    payload: {
      product,
    },
  };
};

export const removeProdact = productId => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      productId,
    },
  };
};