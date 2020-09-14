import {CART_CLOSE,CART_OPEN} from "./mobileCartTypes";

export const cartClose = () => {
  return{
      type: CART_CLOSE
    }
};
export const cartOpen = () => {
    return{
        type: CART_OPEN
    }
};