import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  avatar: '',
  access_token: '',
  id: '',
  isAdmin: false,
  refreshToken: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { _id = '',name = '', email = '', access_token = '', phone = '', address = '', avatar = '', isAdmin } = action.payload
      state.name = name || email;
      state.phone = phone;
      state.address = address;
      state.avatar = avatar;
      state.email = email;
      state.access_token = access_token;
      state.id = _id;
      state.isAdmin = isAdmin;
    },
    resetUser: (state) => {

      state.name = '';
      state.email = '';
      state.access_token = '';
      state.phone = '';
      state.address = '';
      state.avatar = '';
      state.id = '';
      state.isAdmin = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlice.actions

export default userSlice.reducer