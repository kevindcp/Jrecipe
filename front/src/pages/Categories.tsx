import { Flex, Box, Grid} from '@chakra-ui/layout'
import CategoryCard from '../components/CategoryCard'
import SectionHeader from '../components/SectionHeader'
import { useAppSelector} from '../hooks/redux'

const CategoriesPage = () => {
  const { categories } = useAppSelector(state=>state.categories) 
  return (
    <Flex justify='center' h='auto' w='100%' align='left' pl='10vw' pt='5vh' pb='3vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Categories'/>
      <Grid columnGap='20px' rowGap='20px' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 20%), 1fr))' h='100%' w='90%' justifyContent='center'>
        {categories.map(cat => {
          return <CategoryCard key={cat.id} name={cat.name} image={cat.image} link={`/categories/${cat.id}`}></CategoryCard>
        })}
      </Grid>
    </Flex>
  )
}

export default CategoriesPage
