import { createSlice } from "@reduxjs/toolkit";


const basketSlice = createSlice ({name: 'basket',
initialState: {
    basket: [],

    
    
},
reducers: {
    addProducts(state, action) {

        state.basket.push(action.payload)
    },

    
    deleteProduct (state, action){
        
        state.basket = state.basket.filter ((item) => item.id !== action.payload.id);
       
      },
        
    }
})


export const { 
    addProducts, 
    
    deleteProduct 
} = basketSlice.actions

export default basketSlice.reducer