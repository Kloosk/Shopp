import {SUBMENU_ON,SUBMENU_OFF} from "./MobileSubMenuTypes";

const initialState = {
    submenu: false,
    name: ''
};

const submenuReducer = (state=initialState,action) => {
    switch(action.type){
        case SUBMENU_OFF:{
            return{
                ...state,
                submenu: false
            }
        }
        case SUBMENU_ON:{
            return{
                ...state,
                submenu: true,
                name: action.name
            }
        }
        default: return state
    }
};

export default submenuReducer