import * as actionTypes from '../actions/actionTypes';

const initialState = {
  addresses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADDRESSES:
      return { ...state, addresses: action.addresses };
    case actionTypes.DELETE_ADDRESS:
      const newAddresses = [...state.addresses].filter(
        address => address.id !== action.addressId
      );
      return {
        ...state,
        addresses: newAddresses,
      };
    default:
      return state;
  }
};

export default reducer;
