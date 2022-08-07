import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { UserState } from '../types/redux'

const initialState: UserState = {
  token: "",
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      return {
          ...state, token: action.payload
      }
    },
  },
})

export const { set } = userSlice.actions

export const selectuser = (state: RootState) => state.user.token

export default userSlice.reducer