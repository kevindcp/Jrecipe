import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerFooter,
    Button,
    useMediaQuery
  } from '@chakra-ui/react'
import { FC} from 'react'
import { MenuProps } from '../types/menu'
import { useColorMode } from '@chakra-ui/color-mode'
import { BiSearchAlt2, BiCategory } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import { FaRandom, FaHome } from 'react-icons/fa'
import { VscAdd } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'
import { random } from '../utils/Random'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { set } from '../redux/user'
import CustomModal from './Modal'
import RecipeForm from './RecipeForm'
import Searchbar from './SearchBar'

const Menu: FC <MenuProps> = ({ isOpen, onClose }) => {
  const { recipes } = useAppSelector((state => state.recipes))
  const { colorMode } = useColorMode()
  const history = useNavigate()
  const dispatch = useAppDispatch()
  const handleRandom = () => {
    const randId = random(recipes.length, 1)
    history(`/recipes/${randId}`)
    onClose()
  }

  const handleCategories = () => {
    history('/categories')
    onClose()
  }

  const handleNav = (dir: string) => {
    history(dir)
    onClose()
  }

  const handleLogout = () => {
    onClose()
    dispatch(set(''))
    history('/')
  }

  return (
      <Drawer placement='left' onClose={onClose} isOpen={isOpen} size='sm'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader mt='3vh' borderBottomWidth='1px' fontSize='3em' fontWeight='800' pl='50'>
            Jrecipe
          </DrawerHeader>
          <DrawerBody fontSize='1em'>
            <Button 
              w='100%' h='5vh' 
              justifyContent='left' 
              fontSize='1.3em' 
              leftIcon={<FaHome style={{marginRight:40}}/>}
              backgroundColor= {colorMode === 'light'? 'white':'gray.700'}
              mt = '2' mb = '2'
              _focus = {{outline:'none', boxShadow:'none'}}
              onClick = {() => handleNav('/')}
            >
              Home
            </Button>
            <CustomModal 
                leftIcon = {<VscAdd style={{marginRight:40}}/>}
                w='100%' h='5vh' 
                bc={colorMode === 'light'? 'white':'gray.700'}  
                focus={{outline:'none', boxShadow:'none'}}
                content={<RecipeForm/>}
                justifyContent='left' 
                fontSize='1.3em' 
                mt = '2' mb = '2'  
                text = 'Add Recipe'
                header = 'Add Recipe'
            />
            <CustomModal 
                leftIcon = {<BiSearchAlt2 style={{marginRight:40}}/>}
                w='100%' h='5vh' 
                bc={colorMode === 'light'? 'white':'gray.700'}  
                focus={{outline:'none', boxShadow:'none'}}
                content={<Searchbar onClose={onClose}/>}
                justifyContent='left' 
                fontSize='1.3em' 
                mt = '2' mb = '2'  
                text = 'Search' 
            />
            {recipes.length > 0 && <Button
              w='100%' h='5vh' 
              justifyContent='left' 
              fontSize='1.3em' 
              leftIcon={<BiCategory style={{marginRight:40}}/>}
              backgroundColor= {colorMode === 'light'? 'white':'gray.700'}
              mt='2' mb='2'
              _focus={{outline:'none', boxShadow:'none'}}
              onClick={handleCategories}
            >
              Categories
            </Button>}
            {recipes.length > 0 && <Button
              w='100%' h='5vh' 
              justifyContent='left' 
              fontSize='1.3em' 
              leftIcon={<FaRandom style={{marginRight:40}}/>}
              backgroundColor= {colorMode === 'light'? 'white':'gray.700'}
              mt='2' mb='2'
              _focus={{outline:'none', boxShadow:'none'}}
              onClick={handleRandom}
            >
              Random recipe
            </Button>}
            <Button
              w='100%' h='5vh' 
              justifyContent='left' 
              fontSize='1.3em' 
              leftIcon={<FiLogOut style={{marginRight:40}}/>}
              backgroundColor= {colorMode === 'light'? 'white':'gray.700'}
              mt = '2' mb = '2'
              _focus = {{outline:'none', boxShadow:'none'}}
              onClick = {handleLogout}
            >
              Log Out
            </Button>
          </DrawerBody>
          <DrawerFooter >
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  )
  }

  export default Menu