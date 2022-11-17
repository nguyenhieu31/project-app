import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";
export const getProductMenuItem = createAsyncThunk(
  //action type string
  'menuItem/getProductMenuItem',
  // callback function
  async (data) => {
    const url = 'http://localhost:3004/menuItem'
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
  menuItem: [],
  errorMessage: " "
}
const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductMenuItem.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getProductMenuItem.fulfilled, (state, action) => {
        state.loading = false;
        state.menuItem = action.payload;
      })
      .addCase(getProductMenuItem.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload.message;
      })
  }
})
export default menuItemSlice.reducer;