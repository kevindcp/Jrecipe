import { LoginFormInputs, RegisterFormInputs } from "../types/forms";
import axios from 'axios' 
const BASE_URL = 'http://localhost:5000'

export const loginUser = async (user: LoginFormInputs) => {
    try{
        const response =  await axios.post(BASE_URL + '/api/v1/auth/login', user)
        return response.data
    } catch (err) {
        return err.response
    }
}

export const registerUser = async (user: RegisterFormInputs) => {
    try {
        const response = await axios.post(BASE_URL+'/api/v1/auth/register', user)
        return response.data
    } catch (err) {
        return err.response.data
    }
}