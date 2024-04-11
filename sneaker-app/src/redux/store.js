import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from './userSlide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})