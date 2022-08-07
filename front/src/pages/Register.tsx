import { Flex } from "@chakra-ui/layout"
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
    return (
      <Flex justify='center' h='auto' w='100%' align='center' mt='30vh' pb='10vh' zIndex='0' flexDirection='column'>
            <RegisterForm />
      </Flex>
    )
  }
  
  export default RegisterPage