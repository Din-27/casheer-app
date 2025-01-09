import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    product: {},
    products: [],
    category: [],
    database: false,
    time: false,
    keyword: "",
    loadingSampleData: false,
    sideProduct: false,
    imagePreview: ''
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, { payload }) => {
            state.products = payload.products
        },
        setProduct: (state, { payload }) => {
            state.product = payload.product
        },
        setImagePreview: (state, { payload }) => {
            state.imagePreview = payload.imagePreview
        },
        setSideProduct: (state, { payload }) => {
            state.sideProduct = payload.sideProduct
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
export const { setProducts, setImagePreview, setProduct, setSideProduct, setCategory, setKeyword, clearProducts } = productSlice.actions

export default productSlice.reducer