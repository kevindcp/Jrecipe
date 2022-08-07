import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RecipeContent } from '../types/recipes'
import { RecipesState, UpdateRecipe } from '../types/redux'
import type { RootState } from './store'

const initialState: RecipesState = {
  recipes: [],
}

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<RecipeContent>) => {
      const newRecipes = state.recipes.slice()
      newRecipes.push(action.payload)
      return {...state, recipes: newRecipes}
    },
    del: (state, action: PayloadAction<number>) => {
        const newRecipes = state.recipes.slice()
        newRecipes.splice(action.payload, 1)
        return {...state, recipes: newRecipes}
    },
    update: (state, action: PayloadAction<UpdateRecipe>) => {
        const newRecipes = state.recipes.slice()
        newRecipes[action.payload.index] = action.payload.content
        return { ...state, recipes: newRecipes}
    },
    setRecipes: (state, action: PayloadAction<Array<RecipeContent>>) => {
      return {...state, recipes:action.payload}
    }
  },
})

export const { add, update, del, setRecipes } = recipesSlice.actions

export const selectRecipe = (state: RootState) => state.recipes.recipes

export default recipesSlice.reducer