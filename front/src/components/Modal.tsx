import { 
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  useDisclosure,
  Button
} from "@chakra-ui/react"
import { FC} from "react"
import { useColorMode } from "@chakra-ui/react"
import { BiSearchAlt2 } from "react-icons/bi"
import Searchbar from "./SearchBar"
import EditRecipeForm from "./EditRecipeForm"
import { EditIcon } from "@chakra-ui/icons"
import { VscAdd } from "react-icons/vsc"
import RecipeForm from "./RecipeForm"

export const AddRecipeModal: FC = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const { colorMode } = useColorMode()
  return (
      <>
      <Button w='100%' leftIcon={<VscAdd style={{marginRight:40}}/>} backgroundColor={colorMode === 'light'? 'white':'gray.700'} 
      _focus={{outline:'none', boxShadow:'none'}} h='5vh' mt='2' mb='2' fontSize='1.3em' justifyContent='left' onClick={()=>onOpen()}>Add Recipe</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Recipe</ModalHeader>
          <ModalCloseButton/>
          <ModalBody p={6} w='auto' >
            <RecipeForm />
          </ModalBody>
        </ModalContent>
      </Modal>
      </>
  )
}

export const SearchModal: FC = () => {
const { isOpen, onClose, onOpen } = useDisclosure()
const { colorMode } = useColorMode()
return (
    <>
    <Button w='100%' leftIcon={<BiSearchAlt2 style={{marginRight:40}}/>} backgroundColor={colorMode === 'light'? 'white':'gray.700'} _focus={{outline:'none', boxShadow:'none'}}
      h='5vh' mt='2' mb='2' fontSize='1.3em' justifyContent='left' onClick={()=>onOpen()}>Search</Button>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader hidden={true} />
        <ModalCloseButton hidden={true} />
        <ModalBody w='auto' >
            <Searchbar onClose={onClose}/>
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
)
}

export const EditModal: FC = () => {
const { isOpen, onClose, onOpen } = useDisclosure()
const { colorMode } = useColorMode()
return (
    <>
    <Button w='1vw' leftIcon={<EditIcon ml='2'/>}  backgroundColor={colorMode === 'light'? 'white':'gray.800'} 
    _focus={{outline:'none', boxShadow:'none'}} onClick={()=>onOpen()}/>
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Recipe</ModalHeader>
        <ModalCloseButton />
        <ModalBody p={6} w='auto' >
          <EditRecipeForm onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
    </>
)
}
