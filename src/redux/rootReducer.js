import {combineReducers} from "redux";
import mobilemenuReducer from "./mobileMenu/MobilemenuReducer";
import submenuReducer from "./mobileSubMenu/MobileSubMenuReducer";
import subSubMenuReducer from "./mobileSubSubMenu/MobileSubSubMenuReducer";
import menuOpenReducer from "./mobileSearchMenu/MobileSearchMenuReducer";
import cartReducer from "./mobileCart/mobileTypesReducer";
import sortReducer from "./sortMethod/SortMethodReducer";

const rootReducer = combineReducers({
   menu: mobilemenuReducer,
   submenu: submenuReducer,
   subsubmenu: subSubMenuReducer,
   searchmenu: menuOpenReducer,
   cart: cartReducer,
   method: sortReducer,
});

export default rootReducer