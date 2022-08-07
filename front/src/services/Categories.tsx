import axios from 'axios'

export const getCategories = async() => {
    try {
        const response = await axios.get('http://localhost:5000/api/v1/categories')
        return response.data
    } catch(err) {
        return err.response.data
    }
}