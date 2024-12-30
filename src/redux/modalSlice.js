import { createSlice } from '@reduxjs/toolkit'
import { dateFormat } from '../helper/dateFormat'



const initialState = {
    firstTime: true,
    isShowModalReceipt: false,
    receiptNo: null,
    receiptDate: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setFirstTime: (state, { payload }) => {
            state.firstTime = payload.firstTime
        },
        setIsShowModalReceipt: (state, { isShowModalReceipt }) => {
            state.isShowModalReceipt = isShowModalReceipt
        },
        showModalReceipt: (state) => {
            const time = new Date();
            state.isShowModalReceipt = true
            state.receiptNo = `TWPOS-KS-${Math.round(time.getTime() / 1000)}`
            state.receiptDate = dateFormat(time)
        },
        closeModalReceipt: (state) => {
            state.isShowModalReceipt = false
            state.receiptNo = null
            state.receiptDate = null
        }
    },
})

// Action creators are generated for each case reducer function
export const { showModalReceipt, closeModalReceipt, setFirstTime, setIsShowModalReceipt } = modalSlice.actions

export default modalSlice.reducer