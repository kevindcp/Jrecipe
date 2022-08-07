import { Flex, Grid, VStack, Link, Text } from '@chakra-ui/layout'
import RecipeCard from '../components/RecipeCard'
import SectionHeader from '../components/SectionHeader'
import { useAppSelector } from '../hooks/redux'
import { useParams, useNavigate } from 'react-router-dom'

const SearchPage = () => {
    const { recipes } = useAppSelector((state => state.recipes))
    const { pattern } = useParams()
    const history = useNavigate()
    const patternstr = String.raw`${pattern?.toLowerCase()}`
    const regex = new RegExp(patternstr)
    const matches = recipes.filter(recipe => {return regex.test(recipe.title.toLowerCase())})
    console.log(patternstr)
    return (
        <Flex justify='center' h='auto' w='100%' align='left' pl='10vw' pt='5vh' pb='3vh' zIndex='0' flexDirection='column'>
            <SectionHeader name={`Search Results for "${pattern}":`}/>
            { matches.length > 0 ?<Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
                {matches.map((recipe, index) => {
                return (<RecipeCard key={recipe.id} {...recipe} link={`/recipes/${index + 1}`}/>)
                })}
            </Grid> : <VStack> <Text w='100%' fontSize='2em'> There where no matches for your search :( </Text> <Link w='100%' fontSize='1.8em' fontWeight='600' onClick={()=> history('/')}>Go back home</Link></VStack>}
        </Flex>
    )
}

export default SearchPage
