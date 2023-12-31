import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authUser: { username: "david", role: "admin" },
  // authUser: null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthUser: (state, action) => {
      state.authUser = action.payload
    },
    removeAuthUser: (state) => {
      state.authUser = null
    },
  },
})

export const { addAuthUser, removeAuthUser } = authSlice.actions

export default authSlice.reducer
