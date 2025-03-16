import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem('cart')
? JSON.parse(localStorage.getItem('cart'))
: { cartItems: [] };

const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

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

            // calculate the items price
            state.itemsPrice = addDecimals(
                state.cartItems.reduce((acc, item) => + item.price * item.qty, 0)
            )

            // calculate the shippin price | if items price is greater than 100, shipping is free | if not, shipping is 10
            state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

            // calculate the tax price price | tax is 15% of the items price
            state.taxPrice = addDecimals(
                Number((0.15 * state.itemsPrice).toFixed(2))
            )

            // calculate the total price | total price is the sum of the items price, shipping price and tax price
            state.totalPrice = (
                Number(state.itemsPrice) +
                Number(state.shippingPrice) +
                Number(state.taxPrice)
            ).toFixed(2)

            // save the cart to localstorage
            localStorage.setItem('cart', JSON.stringify(state))
        }
    }
})

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;