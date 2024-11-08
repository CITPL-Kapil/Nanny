import { createSlice } from "@reduxjs/toolkit";


const initialState = {}


const addDataTo =(state , action)=>{

}


const testSlice = createSlice({
    name:'test',
    initialState,
    reducers:{
        addData : addDataTo
    }
})

export const {addData } = testSlice.actions

export default testSlice.reducer