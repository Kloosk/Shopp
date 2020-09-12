import {MENU_OFF,MENU_ON} from "./MobilemenuTypes";

const initialState = {
  menu: false
};

const mobilemenuReducer = (state=initialState,action) => {
    switch(action.type){
        case MENU_ON:{
            return{
                ...state,
                menu: true
            }
        }
        case MENU_OFF:{
            return{
                ...state,
                menu: false
            }
        }
        default: return state
    }
};
export default mobilemenuReducer