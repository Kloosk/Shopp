import {SUBSUBMENU_ON,SUBSUBMENU_OFF} from "./MobileSubSubMenuTypes";

const initalState = {
    subsubmenu: false,
    name: ''
};

const subSubMenuReducer = (state=initalState,action) => {
    switch(action.type){
        case SUBSUBMENU_OFF:{
            return{
                ...state,
                subsubmenu: false
            }
        }
        case SUBSUBMENU_ON:{
            return{
                ...state,
                subsubmenu: true,
                name: action.name
            }
        }
        default: return state
    }
};

export default subSubMenuReducer