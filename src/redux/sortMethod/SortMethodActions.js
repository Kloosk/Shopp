import {SORT_DECREASE,SORT_GROW,SORT_DEFAULT} from "./SortMethodTypes";

export const sortDecrease = () => {
  return{
      type: SORT_DECREASE
  }
};

export const sortGrow = () => {
  return{
      type: SORT_GROW
  }
};

export const sortDefault = () => {
    return{
        type: SORT_DEFAULT
    }
};