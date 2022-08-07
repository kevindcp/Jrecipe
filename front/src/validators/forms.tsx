
import * as yup from 'yup'

const validationRegister = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup.string().email('Introduce a valid email address').required('Email is required'),
    password: yup.string().min(6, 'Password must have at least 6 characters').required('Password is required'),
    passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match')
})

const validationLogin = yup.object().shape({
    email: yup.string().email('Introduce a valid email address').required('Email is required'),
    password: yup.string().min(6, '').required('Password is required'),
})

const validationRecipe = yup.object().shape({
    title: yup.string().required('Title is required'),
    category: yup.string().required('Select a category'),
    prepTime: yup.number().required('Prep time is required'),
    cookTime: yup.number().required('Cook time is required'),
    ingredients: yup.string(),
    steps: yup.string(),
    image: yup.mixed(),
})

export {validationRegister, validationLogin, validationRecipe}