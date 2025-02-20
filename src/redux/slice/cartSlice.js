import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [],
    sideCart: false,
    total_price: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart: (state, { payload }) => {
            state.cart = payload.carts
        },
        setSideCart: (state, { payload }) => {
            state.sideCart = payload.sideCart
        },
        addCart: (state, { payload }) => {
            state.cart = [...state.cart, payload.carts]
        },
        changeCart: (state, { payload }) => {
            state.cart[payload.index][payload.name] = payload.value;
        },
        delCart: (state, { payload }) => {
            state.cart.splice(payload.index, 1)
        },
        clearCart: (state) => {
            state.cart = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCart, addCart, setSideCart, changeCart, delCart, clearCart, totalPrice } = cartSlice.actions

export default cartSlice.reducer