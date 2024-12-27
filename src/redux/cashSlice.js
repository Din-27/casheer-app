import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    moneys: [2000, 5000, 10000, 20000, 50000, 100000],
    cash: 0,
    change: 0,
}

export const cashSlice = createSlice({
    name: 'cash',
    initialState,
    reducers: {
        setCash: (state, { cash }) => {
            state.cash = cash;
        },
        setChange: (state, { change }) => {
            state.change = change
        },
        clearCash: (state) => {
            state.cash = 0;
            state.change = 0;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCash, setChange, clearCash } = cashSlice.actions

export default cashSlice.reducer