import {SUBMENU_OFF,SUBMENU_ON} from "./MobileSubMenuTypes";

export const submenuOff = () => {
  return{
      type: SUBMENU_OFF
  }
};
export const submenuOn = (name) => {
    return{
        type: SUBMENU_ON,
        name: name
    }
};