import { Flex, Box, Grid} from '@chakra-ui/layout'
import RecipeCard from '../components/RecipeCard'
import Header from '../components/Header'
import SectionHeader from '../components/SectionHeader'

const recipe = {
  id: 1,
  title: 'Pasta Carbonara',
  cookTime: 10,
  prepTime: 30,
  ingredients: 'ing1/ing2/ing3',
  steps: 'st1/st2/st3dasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss das sssssssssssssssssssssssssssssssssssssssssssssssssssssssss asssssssssssssssssssssssssssss adsdk ashdsjkdhs kjhdsssssssssdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdss adsh djksdsdsdsdddddddddddddddsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdd daskjhdskhjdsssssssssssssssssssssss dasjkhhhhhhhhhhhhhhhhhhh asdkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh daskjhhhhhhhhhhhhhhhhhhhhh',
  category: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
  link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}

const section = {
  name: 'Pasta',
}


const CategoryPage = () => {
  return (
    <Flex justify='center' h='auto' w='100%' align='center' pt='5vh' pb='20vh' zIndex='0' flexDirection='column'>
      <SectionHeader {...section}/>
      <Grid columnGap='1vw' rowGap='1vh' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
        <RecipeCard {...recipe}/>
      </Grid>
    </Flex>
  )
}

export default CategoryPage
