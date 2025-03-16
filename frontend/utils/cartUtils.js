export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {
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
    localStorage.setItem('cart', JSON.stringify(state));

    return state;
}