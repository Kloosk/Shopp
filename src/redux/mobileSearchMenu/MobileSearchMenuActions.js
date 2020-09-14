import {MENU_CLOSE,MENU_OPEN} from "./MobileSearchMenuTypes";

export const menuClose = () => {
    return{
        type: MENU_CLOSE
    }
};
export const menuOpen = () => {
    return{
        type: MENU_OPEN
    }
};

