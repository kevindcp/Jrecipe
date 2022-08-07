import { Button } from "@chakra-ui/button";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { FC } from "react";
import { useNavigate } from 'react-router-dom'
import { useColorMode } from "@chakra-ui/color-mode";

const BackButton:FC = () => {
    const history = useNavigate()
    const { colorMode } = useColorMode()
    return (
        <Button rounded='30' h='0' w='0' leftIcon={<ArrowBackIcon w='5vw' h='auto' maxH='5vh'/>} onClick={()=>history(-1)} 
        backgroundColor= {colorMode === 'light'? 'white':'gray.800'} 
        _focus = {{outline:'none', boxShadow:'none'}}/>
    )
}

export default BackButton