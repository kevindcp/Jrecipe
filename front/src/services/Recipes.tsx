import axios from 'axios'
import { RecipeFormRequest } from '../types/forms'
const BASE_URL = 'http://localhost:5000'
export const getRecipes = async (token:string) => {
    try {
        const response = await axios.get(BASE_URL+'/api/v1/users/me/recipes', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
} 

export const publishRecipe = async(recipe: RecipeFormRequest, token:string) =>{
    try{
        const response =  await axios.post(BASE_URL+'/api/v1/recipes', recipe, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}

export const deleteRecipe = async(token: string, id:number) => {
    try {
        const response = await axios.delete(BASE_URL+`/api/v1/recipes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}

export const updateRecipe = async(recipe: RecipeFormRequest, token: string, id:number) => {
    try {
        const response = await axios.patch(BASE_URL+`/api/v1/recipes/${id}`, recipe, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (err) {
        return err.response.data
    }
}