import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    category: [],
    database: false,
    time: false,
    keyword: "",
    loadingSampleData: false,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, { payload }) => {
            state.products = payload.products
        },
        setCategory: (state, { payload }) => {
            state.category = payload.category
        },
        setKeyword: (state, { payload }) => {
            state.keyword = payload.search
        },
        clearProducts: (state) => {
            state.database = false
            state.time = false
            state.keyword = ""
            state.loadingSampleData = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { setProduct, setCategory, setKeyword, clearProducts } = productSlice.actions

export default productSlice.reducer