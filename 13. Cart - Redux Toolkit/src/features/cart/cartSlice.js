import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems: cartItems, //[...,...,...,]
    amount: 4,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "cart",
    initialState, //this is where the state is
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            let itemId = action.payload;
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== itemId
            );
        },
        increase: (state, { payload }) => {
            let cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount += 1;
        },
        decrease: (state, { payload }) => {
            let cartItem = state.cartItems.find(
                (item) => item.id === payload.id
            );
            cartItem.amount -= 1;
        },
        calculateTotal: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },
    },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
    cartSlice.actions;

export default cartSlice.reducer;
