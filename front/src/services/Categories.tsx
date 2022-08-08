import axios from 'axios'
const BASE_URL = 'http://localhost:5000'

export const getCategories = async() => {
    try {
        const response = await axios.get(BASE_URL+'/api/v1/categories')
        return response.data
    } catch(err) {
        return err.response.data
    }
}