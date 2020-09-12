import {combineReducers} from "redux";
import mobilemenuReducer from "./mobileMenu/MobilemenuReducer";
import submenuReducer from "./mobileSubMenu/MobileSubMenuReducer";

const rootReducer = combineReducers({
   menu: mobilemenuReducer,
   submenu: submenuReducer,
});

export default rootReducer