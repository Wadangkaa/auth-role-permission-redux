import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  authUser: { username: "david", role: "admin" },
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addAuthUser: (state, action) => {
      console.log("add auth user called")
    },
    removeAuthUser: (state, action) => {
      console.log("remove auth user called")
    },
  },
})

export const { addAuthUser, removeAuthUser } = authSlice.actions

export default authSlice.reducer
