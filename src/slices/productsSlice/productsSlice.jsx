import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    // console.log("response in productsSlice", response);

    return response.data;
  } catch (err) {
    console.log("err in productsSlice: ", err);
  }
});

export default productsSlice;
export { fetchProducts };
