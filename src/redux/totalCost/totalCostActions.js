import {TOTAL_COST} from "./totalCostTypes";

export const setTotalCost = (cost) => {
  return{
      type: TOTAL_COST,
      cost: cost
  }
};