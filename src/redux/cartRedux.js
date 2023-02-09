import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const foundItem = state.products.find((item) => {
        if (item._id === action.payload.id) {
          return item;
        } else {
          return false;
        }
      });
      if (!foundItem) {
        state.quantity += 1; //cart quantity
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      } else {
        foundItem.quantity = foundItem.quantity + 1;
        state.total += foundItem.price;
      }
    },
    updateProduct: (state, action) => {
      // eslint-disable-next-line array-callback-return
      state.products.map((item) => {
        if (item._id === action.payload.id) {
          if (action.payload.type === "inc") {
            //if add button is pressed
            item.quantity = item.quantity + 1;
            state.total += item.price;
          } else {
            //for remove button

            if (item.quantity === 1) {
              // after removing if the quantity become zero we will remove the item from the cart
              state.products = state.products.filter(
                (i) => i._id !== action.payload.id
              );
              state.quantity -= 1;
            } else {
              item.quantity = item.quantity - 1;
            }

            state.total -= item.price;
          }
        }
      });
    },
  },
});

export const { addProduct, updateProduct } = cartSlice.actions;
export default cartSlice.reducer;
