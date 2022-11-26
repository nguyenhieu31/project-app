import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const getProductDetail = createAsyncThunk(
  //action type string
  'productDetail/getProductDetail',
  // callback function
  async (id) => {
    const url = `http://localhost:3004/products/${id}`
    try {
      const res = await axios.get(url);
      if (res) {
        if (typeof res.data !== 'string') {
          const data = JSON.stringify(res.data);
          localStorage.setItem("productDetail", data);
        }
        return res.data;
      }
    } catch (err) { }
  })
const initialState = {
  cart: [],
  loading: false,
  productDetail: {},
  errorMessage: " "
}
const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementCartItem: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity++;
      }
    },
    decrementCartItem: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload.id);
      if (product && product.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        product.quantity--;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductDetail.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetail = action.payload;
      })
      .addCase(getProductDetail.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message;
      })
  }
})
export const { addToCart, incrementCartItem, decrementCartItem } = productDetailSlice.actions
export default productDetailSlice.reducer;