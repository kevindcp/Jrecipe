import { Category } from "./category"
import { RecipeContent } from "./recipes"

export type UserState = {
    token: string
}

export type RecipesState = {
    recipes: Array<RecipeContent>
}

export type UpdateRecipe = {
    index: number,
    content: RecipeContent
}

export type CategoryState = {
    categories: Array<Category>
}