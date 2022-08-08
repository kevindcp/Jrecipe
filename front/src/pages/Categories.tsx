import { Flex, Box, Grid} from '@chakra-ui/layout'
import CategoryCard from '../components/CategoryCard'
import SectionHeader from '../components/SectionHeader'
import { useAppSelector} from '../hooks/redux'

const CategoriesPage = () => {
  const { categories } = useAppSelector(state=>state.categories) 
  return (
    <Flex justify='center' h='auto' w='100%' align='center' pt='5vh' pb='20vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Categories'/>
      <Grid columnGap='1vw' rowGap='1vh' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 10%), 1fr))' h='100%' w='90%' justifyContent='center'>
        {categories.map(cat => {
          return <CategoryCard key={cat.id} name={cat.name} image={cat.image} link={`/categories/${cat.id}`}></CategoryCard>
        })}
      </Grid>
    </Flex>
  )
}

export default CategoriesPage
