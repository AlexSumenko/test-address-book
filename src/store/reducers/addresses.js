import * as actionTypes from '../actions/actionTypes';

const initialState = {
  addresses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ADDRESSES:
      return { ...state, addresses: action.addresses };
    default:
      return state;
  }
};

export default reducer;
