import { Flex } from '@chakra-ui/layout'
import Recipe from '../components/Recipe'
import { useAppSelector} from '../hooks/redux'
import { useParams } from 'react-router-dom'

const RecipePage = () => {
  const { categories } = useAppSelector(state => state.categories)
  const { recipes } = useAppSelector((state => state.recipes))
  const { id } = useParams()
  return (
    <Flex justify='center' h='auto' w='100%' align='center' mt='10vh' pb='10vh' zIndex='0' flexDirection='row'>
        <Recipe {...recipes[Number(id)-1]} category={categories[recipes[Number(id)-1].categoryId - 1].name}/>
    </Flex>
  )
}

export default RecipePage
