import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [
      /*
      {
        id: 1,
        name: clothes..,
        price: 100, 
        description: asdfasdfadsf,
        quantity: 2,
        check: True/False
      }
      */
    ],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      console.log("In cartSlice, addToCart, payload = ", action.payload);

      const product = action.payload;
      const existedProduct = state.items.find((item) => item.id === product.id);

      if (existedProduct) {
        existedProduct.quantity++;
      } else {
        state.items.push({
          ...product,
          quantity: 1,
          checked: false,
        });
        state.totalQuantity++;
      }

      console.log("In cartSlice, items len = ", state.items.length);
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id == id) {
          const newItem = { ...item, quantity: item.quantity + 1 };
          return newItem;
        } else {
          return item;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id == id) {
          const newItem = { ...item, quantity: item.quantity - 1 };
          return newItem;
        } else {
          return item;
        }
      });
    },
  },
});

export default cartSlice;
