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
    Text,
    FormHelperText,
} from '@chakra-ui/react';
import { RecipeFormInputs } from '../types/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationRecipe } from '../validators/forms';
import { FC, useState, ChangeEvent, useEffect } from 'react';
import { publishRecipe, uploadImage } from '../services/Recipes';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { add } from '../redux/recipes';
import { useNavigate } from 'react-router-dom'

const RecipeForm: FC = () => {
    const dispatch = useAppDispatch()
    const history = useNavigate()
    const { register, handleSubmit ,formState: {errors}} = useForm({
        resolver: yupResolver(validationRecipe),
        mode: 'onBlur'
    })
    const [isLoading, setIsLoading] = useState(false)
    const { categories } = useAppSelector(state => state.categories)
    const { token } = useAppSelector(state=>state.user) 
    const onSubmit = async (values: RecipeFormInputs) => {
        setIsLoading(true)
        if (values.image[0]) {
            if (values.image[0].type=== 'image/jpeg' || values.image[0].type === 'image/png'){
                const imgur = await uploadImage(values.image[0])
                const request = {...values, category: categories[values.category].id ,image: imgur}
                const response = await publishRecipe(request, token)
                const recipe = {...response, category: categories[response.categoryId - 1].name}
                dispatch(add(recipe))
                history('/')
            } else (
                console.log('bad format') //placeholder
            )
        } else {
            const imgur = ''
            const request = {...values, category: categories[values.category].id ,image: imgur}
            const response = await publishRecipe(request, token)
            const recipe = {...response, category: categories[response.categoryId - 1].name}
            dispatch(add(recipe))
            history('/')
        }
        setIsLoading(false)
    }
    const [picture, setPicture] = useState('')
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event || !event.target.files){
            return
        }
        const imageFile: File = event.target.files[0]
        const imageURL: string = URL.createObjectURL(imageFile)
        setPicture(imageURL)
    }

    return (
        <FormControl 
            w = '100%'
            maxW = "600px"
            h = 'auto'
        >
            <FormControl
                isInvalid = {!!errors?.title?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Title</FormLabel>
                <Input type='text' placeholder='title' {...register('title')}/>
                <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.category?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select a category' {...register('category')}>
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
                    <FormLabel>Prep time (min) </FormLabel>
                    <NumberInput defaultValue={0} step={1}  >
                        <NumberInputField {...register('prepTime')}/>
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
                    <FormLabel>Cook time (min)</FormLabel>
                    <NumberInput defaultValue={0} step={1}>
                        <NumberInputField {...register('cookTime')}/>
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
                <Textarea placeholder='ingredients' {...register('ingredients')}/>
                <FormErrorMessage>{errors?.ingredients?.message}</FormErrorMessage>
                <FormHelperText>Every ingredient must end on a line break.</FormHelperText>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.steps?.message}
                p = '2'
            >
                <FormLabel>Steps</FormLabel>
                <Textarea placeholder='Steps' {...register('steps')}/>
                <FormErrorMessage>{errors?.steps?.message}</FormErrorMessage>
                <FormHelperText>Every step must end on a line break.</FormHelperText>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.image?.message}
                p = '2'
            >
                <FormLabel>Picture</FormLabel>
                <Input type='file' id='file' hidden accept='image/*' {...register('image')} onChange={handleImageChange}/>
                <Box alignSelf='center'>
                    <label htmlFor='file'>
                        <Image src={picture} maxW='300px' w='auto' h='auto' maxH='300px' fallbackSrc={'../assets/images/defaultImage.png'} cursor='pointer' rounded='10' />
                    </label>
                </Box>
                <FormErrorMessage>{errors?.image?.message}</FormErrorMessage>
                <FormHelperText>Upload a picture of your recipe.</FormHelperText>
            </FormControl> 
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '96%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = { !!errors.title || !!errors.category || !!errors.ingredients || !!errors.steps || !!errors.prepTime || !!errors.cookTime}
                isLoading={isLoading}
            >
                Submit
            </Button>
        </FormControl>
    )
}

export default RecipeForm