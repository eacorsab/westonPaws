/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  checked:false,
  loggedIn: false,
  userId: '',
  userName: '',
  userLastName: '',
  userEmail: '',
  userTitle: '',
  userCompany: '',
  userAbout: '',
  userImage: '',
  userMarkPersonal: '',
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    authenticate: (state, { payload }) => {
      state.loggedIn = payload.loggedIn
      state.checked = payload.checked
    },
    saveUserId: (state, { payload }) => {
      state.userId = payload.userId
    },
    saveUserName: (state, { payload }) => {
      state.userName = payload.userName
    },
    saveUserLastName: (state, { payload }) => {
        state.userLastName = payload.userLastName
      },
    saveUserEmail: (state, { payload }) => {
      state.userEmail = payload.userEmail
    },
  },
})

export const {
  authenticate, saveUserId, saveUserName, saveUserLastName, saveUserEmail
} = userSlice.actions;

export default userSlice.reducer