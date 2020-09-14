import {CART_CLOSE,CART_OPEN} from "./mobileCartTypes";

const initialState = {
  open: false
};

const cartReducer = (state=initialState,action) => {
    switch (action.type) {
        case CART_OPEN: {
            return{
                ...state,
                open: true
            }
        }
        case CART_CLOSE: {
            return{
                ...state,
                open: false
            }
        }
        default: return state
    }
};

export default cartReducer