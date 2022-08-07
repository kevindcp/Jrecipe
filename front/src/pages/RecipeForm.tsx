import { Flex } from "@chakra-ui/layout"
import RecipeForm from "../components/RecipeForm"

const RecipeFormPage = () => {
    return (
      <Flex justify='center' h='auto' w='100%' align='center' mt='10vh' pb='10vh' zIndex='0' flexDirection='column'>
            <RecipeForm/>
      </Flex>
    )
  }
  
  export default RecipeFormPage