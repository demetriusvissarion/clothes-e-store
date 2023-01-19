// "createStore" is used here for learning purposes, in future projects it will be replaced with
import { createStore, combineReducers } from "redux";

import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { cartReducer } from "../features/cart/cartSlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";

// Create and export the store here.
export const store = createStore(
  combineReducers({
    inventory: inventoryReducer,
    cart: cartReducer,
    currency: currencyFilterReducer,
  })
);
