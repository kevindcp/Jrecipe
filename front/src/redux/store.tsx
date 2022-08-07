import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user'
import recipesReducer from './recipes'
import categoryReducer from './category'

export const store = configureStore({
    reducer: {
        user: userReducer,
        recipes: recipesReducer,
        categories: categoryReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch