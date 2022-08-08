import {
    Box,
    List,
    ListIcon,
    VStack,
    ListItem,
    HStack,
    Text,
    Badge,
    Button,
} from '@chakra-ui/react';
import { 
    ChevronRightIcon, DeleteIcon, EditIcon
} from '@chakra-ui/icons'
import { FC, useState } from 'react';
import { RecipeContent } from '../types/recipes';
import { useNavigate, useParams } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux';
import AlertPopup from './Alert';
import { useColorMode } from '@chakra-ui/color-mode';
import CustomModal from './Modal';
import EditRecipeForm from './EditRecipeForm';
import { deleteRecipe } from '../services/Recipes';

const Recipe : FC <RecipeContent> = ({title, cookTime, prepTime, ingredients, steps, category}) => {
    const ingredientList = ingredients.split('\n')
    const { colorMode } = useColorMode()
    const [isAlertOpen, setIsAlertOpen] = useState(false)
    const history = useNavigate()
    const { id } = useParams()
    const stepsList = steps.split('\n')
    const { recipes } = useAppSelector(state => state.recipes)
    const { token } = useAppSelector(state => state.user) 
    const handleDelete = async () => {
        try {
            await deleteRecipe(token, recipes[Number(id) -1].id)
            history('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <VStack
            spacing = '1vh'
            h = '100%'
        >
            <Box w = '80vw'>
                <Text textAlign='left' fontSize= {['30px', '35px', '40px', '45px', '45px']} fontWeight='400'>
                    {title}
                    <Badge ml='2'>
                        {category}
                    </Badge>
                </Text>
                <CustomModal 
                    leftIcon = {<EditIcon ml='2'/>}  
                    w ='1vw' 
                    bc={colorMode === 'light'? 'white':'gray.800'}  
                    focus={{outline:'none', boxShadow:'none'}}
                    content={<EditRecipeForm />}
                    header= 'Edit Recipe'
                />
                <Button 
                    leftIcon={<DeleteIcon ml='2'/>} 
                    onClick = {() => setIsAlertOpen(true)} 
                    w='1vw'
                    backgroundColor= {colorMode === 'light'? 'white':'gray.800'} 
                    _focus = {{outline:'none', boxShadow:'none'}}
                />
            </Box>
            <Box w = '80vw'>
                <Text textAlign='left' fontSize='1.5em' fontWeight='400'> Cooking Time </Text>
            </Box>
            <HStack w = '80vw' spacing='1vw'>
                <Box w='40vw' top='1'>
                    <Text fontSize='0.8em' fontWeight='400'>Prep Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400'>{prepTime} min</Text>
                </Box>
                <Box w='40vw'>
                    <Text fontSize='0.8em' fontWeight='400'>Cook Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400' >{cookTime} min</Text>
                </Box>
                <Box w='40vw'>
                    <Text fontSize='0.8em' fontWeight='400'>Total Time:</Text>
                    <Text fontSize='1.2em' fontWeight='400' >{cookTime + prepTime} min</Text>
                </Box>
            </HStack>
            <Box w='80vw'>
                <Text fontSize='1.5em' fontWeight='400' > Ingredients </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {ingredientList.map( (ingredient, index )=> {
                        return <ListItem key= {index}> 
                                <HStack alignItems='start'>
                                    <Box> <ListIcon as={ChevronRightIcon} color='blue.500' /> </Box>
                                    <Box> <Text w='60vw'> {ingredient} </Text> </Box>
                                </HStack>
                            </ListItem>
                    })}
                </List>
            </Box>
            <Box w = '80vw'>
                <Text fontSize='1.5em' fontWeight='400' > Steps </Text>
                <List fontSize='1.2em' fontWeight='300'>
                    {stepsList.map( (step, index )=> {
                        return <ListItem key= {index}> 
                                <HStack alignItems='start'>
                                   <Box> <ListIcon as={ChevronRightIcon} color='blue.500' /> </Box>
                                   <Box> <Text w='60vw'>{step} </Text> </Box>
                                </HStack>
                            </ListItem>

                    })}
                </List>
            </Box>
            <AlertPopup isOpen={isAlertOpen} setIsOpen={setIsAlertOpen} content='Delete Recipe' handleDelete={handleDelete} />
        </VStack>
    )
}

export default Recipe