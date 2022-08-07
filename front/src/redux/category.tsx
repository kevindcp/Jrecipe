import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { CategoryState} from '../types/redux'
import { Category } from '../types/category'

const initialState: CategoryState = {
  categories: [],
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Array<Category>>) => {
      return {
          ...state, categories: action.payload
      }
    },
  },
})

export const { setCategories } = categorySlice.actions

export const selectCategory = (state: RootState) => state.categories.categories

export default categorySlice.reducer