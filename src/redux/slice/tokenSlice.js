import { createSlice } from "@reduxjs/toolkit";


export const tokenSlice = createSlice({
    name: "token",
    initialState: {
        token: JSON.parse(localStorage.getItem("token")) || null
    },
    reducers: {
        addToken: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", JSON.stringify(action.payload))
        }
    }
})

export const {addToken} = tokenSlice.actions
export default tokenSlice.reducer