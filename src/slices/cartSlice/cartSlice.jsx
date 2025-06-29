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

      // console.log("In cartSlice, items len = ", state.items.length);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id != id);
      state.totalQuantity--;
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

      state.totalPrice = state.items.reduce((sum, item) => {
        if (item.checked) {
          return sum + item.price * item.quantity;
        } else {
          return sum;
        }
      }, 0);
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

      state.totalPrice = state.items.reduce((sum, item) => {
        if (item.checked) {
          return sum + item.price * item.quantity;
        } else {
          return sum;
        }
      }, 0);
    },
    tickCheckbox: (state, action) => {
      const id = action.payload;
      state.items = state.items.map((item) => {
        if (item.id == id) {
          const newItem = { ...item, checked: !item.checked };
          return newItem;
        } else {
          return item;
        }
      });
      state.totalPrice = state.items.reduce((sum, item) => {
        if (item.checked) {
          return sum + item.price * item.quantity;
        } else {
          return sum;
        }
      }, 0);
    },
    tickChooseAllCheckbox: (state, action) => {
      const productList = state.items;
      const numberOfCheckedItems = productList.filter(
        (item) => item.checked
      ).length;

      if (numberOfCheckedItems === productList.length) {
        // If all items are checked, uncheck all
        state.items = productList.map((item) => {
          const newItem = { ...item, checked: false };
          return newItem;
        });

        state.totalPrice = 0; // Reset total price when unchecking all
      } else {
        state.items = productList.map((item) => {
          const newItem = { ...item, checked: true };
          return newItem;
        });

        state.totalPrice = state.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      }
    },
  },
});

export default cartSlice;
