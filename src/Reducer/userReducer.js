import { Types } from '../action/Action';

const initialState = {
  isloading:false,
  items: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_REQUEST:
      return {
        ...state,
        isloading:true
      };
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        items: action.payload.items,
        isloading:false
      };
    default:
      return state;
  }
};