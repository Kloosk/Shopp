import {SUBSUBMENU_OFF,SUBSUBMENU_ON} from "./MobileSubSubMenuTypes";

export const subSubMenuOff = () => {
    return{
        type: SUBSUBMENU_OFF
    }
};

export const subSubMenuOn = (name) => {
    return{
        type: SUBSUBMENU_ON,
        name: name
    }
};