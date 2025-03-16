import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../../utils/cartUtils";

const initialState = localStorage.getItem('cart')
? JSON.parse(localStorage.getItem('cart'))
: { cartItems: [] };



const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // item to add to the cart
            const item = action.payload;

            // check if the item is already in the card
            const existItem = state.cartItems.find((x) => x._id === item._id);

            if (existItem) {
                // if exists, update quantity
                state.cartItems = state.cartItems.map((x) =>
                    x._id === existItem._id ? item : x
                  );
            } else {
                // if item not in cart, add new item to cartItems
                state.cartItems = [...state.cartItems, item];
            }
            // update the prices and save to storage
            return updateCart(state, item);
            
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;