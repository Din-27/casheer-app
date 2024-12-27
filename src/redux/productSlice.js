import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    products: [],
    database: false,
    time: false,
    keyword: "",
    loadingSampleData: false,
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, { products }) => {
            state.products = products
        },
        setKeyword: (state, { search }) => {
            state.products = search
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
export const { loadProducts, setProduct, setKeyword, clearProducts } = productSlice.actions

export default productSlice.reducer