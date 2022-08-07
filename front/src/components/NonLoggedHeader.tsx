import {
    HStack,
    Text,
    useColorMode,
    IconButton,
    Flex,
} from '@chakra-ui/react';
import { 
    MoonIcon,
    SunIcon,
} from '@chakra-ui/icons'
import { FC } from 'react';

const NonLoggedHeader: FC = () =>{
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <Flex h='8vh' w='100%' pos='fixed' zIndex='1' top='0' backgroundColor= {colorMode === 'light'? 'white':'gray.800'} dir='column'>
            <Text fontWeight='800' pl='1vw' pt='1vh' fontSize='2.5em' justifySelf='center' align='center'>Jrecipe</Text>
            <IconButton 
                aria-label='night mode' 
                icon={colorMode === 'light' ? <MoonIcon h='3vh'  mt='9vh' w='auto'/> : <SunIcon h='3vh'  mt='10vh' w='auto'/>} 
                onClick={toggleColorMode} 
                pr='3vw'
                ml='auto'
                h='0' w='auto'
                backgroundColor= {colorMode === 'light'? 'white':'gray.800'}
                outline='none'
                boxShadow='none'
                _focus = {{outline:'none', boxShadow:'none'}}
                _hover = {{outline:'none', boxShadow:'none'}}
            />
        </Flex>
    )
}

export default NonLoggedHeader