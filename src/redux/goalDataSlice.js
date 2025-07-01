import {createSlice} from "@reduxjs/toolkit"

const goalDataSlice = createSlice({
    name:"goalData",
    initialState:{
        Data:{}
    },
    reducers:{
        // actions
        setGoalData:(state,action) => {
            state.Data = action.payload;
        },
    }
});
export const {
    setGoalData
} = goalDataSlice.actions;
export default goalDataSlice.reducer;