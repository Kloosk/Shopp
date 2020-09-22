import {combineReducers} from "redux";
import mobilemenuReducer from "./mobileMenu/MobilemenuReducer";
import submenuReducer from "./mobileSubMenu/MobileSubMenuReducer";
import subSubMenuReducer from "./mobileSubSubMenu/MobileSubSubMenuReducer";
import menuOpenReducer from "./mobileSearchMenu/MobileSearchMenuReducer";
import cartReducer from "./mobileCart/mobileTypesReducer";
import sortReducer from "./sortMethod/SortMethodReducer";
import totalCostReducer from "./totalCost/totalCostReducer";

const rootReducer = combineReducers({
   menu: mobilemenuReducer,
   submenu: submenuReducer,
   subsubmenu: subSubMenuReducer,
   searchmenu: menuOpenReducer,
   cart: cartReducer,
   method: sortReducer,
   cost: totalCostReducer
});

export default rootReducer