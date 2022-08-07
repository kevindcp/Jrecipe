import { Flex } from "@chakra-ui/layout"
import Header from "../components/Header"
import RecipeForm from "../components/RecipeForm"

const AddRecipePage = () => {
    return (
      <>
      <Header/>
      <Flex justify='center' h='auto' w='100%' align='center' mt='20vh' pb='10vh' zIndex='0' flexDirection='column'>
            <RecipeForm/>
      </Flex>
      </>
    )
}
  
export default AddRecipePage