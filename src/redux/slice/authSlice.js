import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    token: ''
}

export const cartSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload.token
        },
        clearToken: (state) => {
            state.token = ''
        }
    },
})

// Action creators are generated for each case reducer function
export const { setToken, clearToken } = cartSlice.actions

export default cartSlice.reducer