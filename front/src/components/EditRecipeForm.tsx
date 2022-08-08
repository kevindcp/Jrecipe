import {
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Input, 
    Button,
    Textarea,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
    Image,
    Box,
    FormHelperText,
} from '@chakra-ui/react';
import { RecipeFormInputs } from '../types/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationRecipe } from '../validators/forms';
import { FC, useState, ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { update } from '../redux/recipes';
import { useParams } from 'react-router-dom'
import { RecipeContent } from '../types/recipes';
import { updateRecipe } from '../services/Recipes';

const EditRecipeForm: FC = () => {
    const dispatch = useAppDispatch()
    const { recipes } = useAppSelector(state => state.recipes)
    const { categories } = useAppSelector(state => state.categories)
    const { token } = useAppSelector(state => state.user)
    const { id } = useParams()
    const recipe:RecipeContent = recipes[Number(id) - 1]
    const { register, handleSubmit ,formState: {errors}} = useForm({
        resolver: yupResolver(validationRecipe),
        mode: 'onBlur'
    })
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async (values: RecipeFormInputs) => {
        setIsLoading(true)
        const request = {...values, category: categories[values.category].id}
        const response = await updateRecipe( request, token, recipes[Number(id)-1].id)
        const recipe = {...response, category: categories[response.categoryId - 1].name}
        dispatch(update({index:Number(id)-1 ,content:recipe}))
        setIsLoading(false)
    }

    return (
        <FormControl 
            w = '100%'
            maxW = "600px"
            h = '100%'
        >
            <FormControl
                isInvalid = {!!errors?.title?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Title</FormLabel>
                <Input type='text' placeholder='title' {...register('title')} defaultValue={recipe.title}/>
                <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.category?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select a category' {...register('category')} >
                    {categories.map((category, index) => {
                        return <option key={category.id} value={index}>{category.name} </option>
                    })}
                </Select>
            </FormControl>
            <HStack>
                <FormControl
                    isInvalid = {!!errors?.prepTime?.message}
                    p = '2'
                    isRequired
                    width='50%'
                >
                    <FormLabel>Prep time</FormLabel>
                    <NumberInput defaultValue={recipe.prepTime} step={1}>
                        <NumberInputField {...register('prepTime')} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormHelperText>Prep time in minutes.</FormHelperText>
                </FormControl>
                <FormControl
                    isInvalid = {!!errors?.cooktime?.message}
                    p = '2'
                    isRequired
                    width='50%'
                >
                    <FormLabel>Cook time</FormLabel>
                    <NumberInput defaultValue={recipe.cookTime} step={1}>
                        <NumberInputField  {...register('cookTime')} />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <FormHelperText>Cook time in minutes.</FormHelperText>
                </FormControl>
            </HStack>
            <FormControl
                isInvalid = {!!errors?.ingredients?.message}
                p = '2'
            >
                <FormLabel>Ingredients</FormLabel>
                <Textarea placeholder='ingredients' {...register('ingredients')} defaultValue={recipe.ingredients} />
                <FormErrorMessage>{errors?.ingredients?.message}</FormErrorMessage>
                <FormHelperText>Every ingredient must end on a line break.</FormHelperText>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.steps?.message}
                p = '2'
            >
                <FormLabel>Steps</FormLabel>
                <Textarea placeholder='Steps' {...register('steps')} defaultValue={recipe.steps} />
                <FormErrorMessage>{errors?.steps?.message}</FormErrorMessage>
                <FormHelperText>Every step must end on a line break.</FormHelperText>
            </FormControl> 
            <FormControl
                p = '2'
            >
                <FormLabel>Image</FormLabel>
                <Input type='Text' placeholder='Image' {...register('image')}  defaultValue={recipe.image}/>
                <FormHelperText>Link to your uploaded image. You can upload your image using <a href='https://postimages.org/' color='blue' target={'_blank'}>Postimages</a>, and copy the direct link to obtain your uploaded image URL.</FormHelperText>
            </FormControl>
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '96%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = { !!errors.title || !!errors.category || !!errors.ingredients || !!errors.steps || !!errors.prepTime || !!errors.cookTime}
                isLoading = {isLoading}
            >
                Submit
            </Button>
        </FormControl>
    )
}

export default EditRecipeForm