import {createSlice} from "@reduxjs/toolkit"

const modeSlice = createSlice({
    name:"screenMode",
    initialState:{
        darkMode:false
    },
    reducers:{
        // actions
        setScreenMode:(state,action) => {
            state.mode = action.payload;
        },
        toggleScreenMode : (state,action) => {
            state.mode = !state.mode
        }
    }
});
export const {
    toggleScreenMode,
    setScreenMode,
} = modeSlice.actions;
export default modeSlice.reducer;