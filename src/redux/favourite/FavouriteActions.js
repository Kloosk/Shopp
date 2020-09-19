import {FAV_ADD,FAV_SUB} from "./FavouriteTypes";

export const favAdd = () => {
    return{
        type: FAV_ADD
    }
};

export const favSub = () => {
    return{
        type: FAV_SUB
    }
};