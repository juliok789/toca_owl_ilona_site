import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice ({
    name: 'product',
    initialState: {
        product: {}
    },
    reducers: {
        openProduct (state, action) {
            state.product = (action.payload)
        }
    }

})

export const {openProduct} = productSlice.actions

export default productSlice.reducer
