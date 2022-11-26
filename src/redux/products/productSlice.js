import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const getProducts = createAsyncThunk(
  //action type string
  'products/getProducts',
  // callback function
  async (data) => {
    const url = 'http://localhost:3004/products'
    try {
      const res = await axios.get(url);
      if (res) {
        return res.data;
      }
    } catch (err) { }
  })
const initialState = {
  cart: [],
  loading: false,
  products: [],
  errorMessage: " "
}
const ProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message;
      })
  }
})
export default ProductSlice.reducer;