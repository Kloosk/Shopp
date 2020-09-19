import {FAV_SUB,FAV_ADD} from "./FavouriteTypes";

const initialState = {
  num: 0
};

const favReducer = (state=initialState,action) => {
    switch (action.type) {
        case FAV_ADD:{
            return{
                ...state,
                num: state.num + 1
            }
        }
        case FAV_SUB:{
            return{
                ...state,
                num: state.num - 1
            }
        }
        default: return state
    }
};

export default favReducer