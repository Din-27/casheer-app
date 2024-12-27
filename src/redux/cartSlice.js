import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [],
    total_price: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { carts }) => {
            state.cart = carts
        },
        totalPrice: (state) => {
            state.total_price = state.cart.reduce(
                (total, item) => total + item.qty * item.price,
                0
            )
        },
        clearCart: (state) => {
            state.cart = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCart, clearCart, totalPrice } = cartSlice.actions

export default cartSlice.reducer