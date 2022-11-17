import { configureStore } from '@reduxjs/toolkit';
import ProductReducer from './products/productSlice';
import MenuItemReducer from './menuItem/menuItemSlice'
export const store = configureStore({
  reducer: {
    products: ProductReducer, // new line
    menuItem: MenuItemReducer,
  }
});