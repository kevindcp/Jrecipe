import { Flex, Grid, Link, Text, VStack } from '@chakra-ui/layout'
import RecipeCard from '../components/RecipeCard'
import SectionHeader from '../components/SectionHeader'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { setRecipes } from '../redux/recipes'
import { getRecipes } from '../services/Recipes'
import { getCategories } from '../services/Categories'
import { setCategories } from '../redux/category'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const CategoryPage = () => {
  const { recipes } = useAppSelector(state => state.recipes)
  const { token } = useAppSelector(state=>state.user) 
  const { categories } = useAppSelector(state=>state.categories) 
  const history = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()
  useEffect( () => {
    const getData = async () => {
      const categoryList = await getCategories()
      dispatch(setCategories(categoryList))
      const recList = await getRecipes(token)
      dispatch(setRecipes(recList))
    }
    getData() 
  }, [])
  return (
    <Flex justify='center' h='auto' w='100%' align='left' pl='10vw' pt='5vh' pb='3vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Recipes'/>
      {recipes.length > 0 ? <Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
        {recipes.filter(recipe => recipe.categoryId === parseInt(id)).map((recipe, index) => {
          return (<RecipeCard key={recipe.id} {...recipe} category={categories[recipe.categoryId - 1].name} link={`/recipes/${index + 1}`}/>)
        })}
      </Grid> :<VStack> <Text w='100%' fontSize='2em'> You have no recipes yet :( </Text> <Link w='100%' fontSize='1.8em' fontWeight='600' onClick={()=> history('/recipes/add')}>Click here to create one</Link></VStack>}
    </Flex>
  )
}

export default CategoryPage
