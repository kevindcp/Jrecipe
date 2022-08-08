import { LoginFormInputs, RegisterFormInputs } from "../types/forms";
import axios from 'axios' 

export const loginUser = async (user: LoginFormInputs) => {
    try{
        const response =  await axios.post('/api/v1/auth/login', user)
        return response.data
    } catch (err) {
        return err.response
    }
}

export const registerUser = async (user: RegisterFormInputs) => {
    try {
        const response = await axios.post('/api/v1/auth/register', user)
        return response.data
    } catch (err) {
        return err.response.data
    }
}