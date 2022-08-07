import { Flex } from "@chakra-ui/layout"
import EditRecipeForm from "../components/EditRecipeForm"

const EditRecipeFormPage = () => {
    return (
      <Flex justify='center' h='auto' w='100%' align='center' mt='10vh' pb='10vh' zIndex='0' flexDirection='row'>
        
            <EditRecipeForm/>
      </Flex>
    )
  }
  
  export default EditRecipeFormPage