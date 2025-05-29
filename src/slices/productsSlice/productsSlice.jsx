import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [
      /*
      {
        id,
        name, 
        image,
        price,
        category,
        description,
        rate,
        count
      }
      
      */
    ],
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
        state.productList = action.payload.map((item) => {
          return {
            id: item.id,
            name: item.title,
            image: item.image,
            price: item.price,
            category: item.category,
            description: item.description,
            rate: item.rating.rate,
            count: item.rating.count,
          };
        });
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
