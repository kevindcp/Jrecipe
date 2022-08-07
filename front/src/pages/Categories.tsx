import { Flex, Box, Grid} from '@chakra-ui/layout'
import CategoryCard from '../components/CategoryCard'
import Header from '../components/Header'
import SectionHeader from '../components/SectionHeader'


const category = {
    id: 1,
    name: 'Pasta',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg',
    link: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg'
}

const category2 = {
  id: 1,
  name: 'Pasta',
  image: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG',
  link: 'https://upload.wikimedia.org/wikipedia/commons/4/42/FrenchToast.JPG'
}


const CategoriesPage = () => {
  return (
    <Flex justify='center' h='auto' w='100%' align='center' pt='5vh' pb='20vh' zIndex='0' flexDirection='column'>
      <SectionHeader name='Categories'/>
      <Grid columnGap='1vw' rowGap='1vh' gridAutoFlow='row' templateColumns='repeat(auto-fill, minmax(max(300px, 10%), 1fr))' h='100%' w='90%' justifyContent='center'>
        <CategoryCard {...category}/>
        <CategoryCard {...category2}/>
        <CategoryCard {...category}/>
        <CategoryCard {...category2}/>
        <CategoryCard {...category}/>
        <CategoryCard {...category2}/>
        <CategoryCard {...category}/>
        <CategoryCard {...category2}/>
      </Grid>
    </Flex>
  )
}

export default CategoriesPage
