import {MENU_CLOSE,MENU_OPEN} from "./MobileSearchMenuTypes";

const initialState = {
  open: false
};

const menuOpenReducer = (state=initialState,action) => {
    switch(action.type){
        case MENU_OPEN: {
            return{
                ...state,
                open: true
            }
        }
        case MENU_CLOSE: {
            return{
                ...state,
                open: false
            }
        }
        default: return state
    }
};
export default menuOpenReducer