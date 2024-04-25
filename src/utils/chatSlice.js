import { createSlice } from "@reduxjs/toolkit"
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages: []
    },
    reducers: {
        addMessage: (state, action)=>{
            // splice will restrict message lengh to 10 and it will remove one message from top
            state.messages.splice(OFFSET_LIVE_CHAT, 1);
            // unshift is reverse of push 
            state.messages.unshift(action.payload);
        }
    }
})
export const {addMessage}= chatSlice.actions;
export default chatSlice.reducer;