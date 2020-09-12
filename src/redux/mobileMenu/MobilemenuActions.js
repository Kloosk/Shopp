import {MENU_OFF,MENU_ON} from "./MobilemenuTypes";

export const menuOff = () => {
  return{
      type: MENU_OFF
  }
};
export const menuOn = () => {
  return{
      type: MENU_ON
  }
};