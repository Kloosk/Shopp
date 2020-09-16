import {SORT_DECREASE,SORT_GROW,SORT_DEFAULT} from "./SortMethodTypes";

const initialState = {
  method: ''
};

const sortReducer = (state=initialState,action) => {
    switch (action.type) {
        case SORT_GROW: {
            return{
                ...state,
                method: 'grow'
            }
        }
        case SORT_DECREASE:{
            return{
                ...state,
                method: 'decrease'
            }
        }
        case SORT_DEFAULT:{
            return{
                ...state,
                method: 'default'
            }
        }
        default: return state
    }
};

export default sortReducer