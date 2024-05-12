import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("carts")) || [],
  },
  reducers: {
    addToCart(state, action) {
      let index = state.value?.findIndex((el) => el.id === action?.payload?.id);
      if (index < 0) {
        state.value = [...state.value, { ...action.payload, quantity: 1 }];
      }
      savedData(state.value);
    },
    incCartQuantity(state, action) {
      let index = state.value?.findIndex((el) => el.id === action?.payload?.id);
      state.value = state.value?.map((item, inx) =>
        index == inx ? { ...item, quantity: item.quantity + 1 } : item
      );
      savedData(state.value);
    },
    decCartQuantity(state, action) {
      let index = state.value?.findIndex((el) => el.id === action?.payload?.id);
      state.value = state.value?.map((item, inx) =>
        index == inx ? { ...item, quantity: item.quantity - 1 } : item
      );
      savedData(state.value);
    },
    removeItemFromCart(state, action) {
      state.value = state.value.filter((el) => el.id !== action.payload.id);
      savedData(state.value);
    },
    removeAllItemsFromCart() {},
  },
});
export const {
  addToCart,
  incCartQuantity,
  decCartQuantity,
  removeItemFromCart,
  removeAllItemsFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;

function savedData(data) {
  localStorage.setItem("carts", JSON.stringify(data));
}
