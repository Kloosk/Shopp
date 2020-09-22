import {TOTAL_COST} from "./totalCostTypes";

const initialState = {
  totalCost: 0
};

const totalCostReducer = (state=initialState,action) => {
    switch(action.type){
        case TOTAL_COST:{
            return{
                ...state,
                totalCost: action.cost
            }
        }
        default: return state
    }
};

export default totalCostReducer