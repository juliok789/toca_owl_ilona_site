import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice ({name: 'basket',
initialState: {
    basket: [],
    totalPrice:0,
    quantity:0

    
    
},
reducers: {
    addProducts(state, action) {

        state.basket.push(action.payload)
        
        state.totalPrice = state.basket.reduce((sum,current) => {
            return sum + current.price},0)
       
        state.quantity = state.basket.reduce((sum) => {
            return sum + 1},0)
    
    },

    
    deleteProduct (state, action){
        
        state.basket = state.basket.filter ((item) => item.id !== action.payload.id);
       
        state.totalPrice = state.basket.reduce((sum,current) => {
            return sum + current.price},0)
        
        state.quantity = state.basket.reduce((sum) => {
                return sum + 1},0)
      },
        
    }
})


export const { 
    addProducts, 
    
    deleteProduct 
} = basketSlice.actions

export default basketSlice.reducer