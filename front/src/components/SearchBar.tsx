
import { 
    InputGroup,
    Input,
    Button,
    InputRightElement
 } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useState, FC } from "react"
import { useNavigate } from 'react-router-dom'

const Searchbar: FC <any> = ({ onClose }) => {
    const [searchbar, setSearchbar] = useState('')
    const history = useNavigate()
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.code === 'Enter' && searchbar!='') {
            history(`/recipes/search/${searchbar}`)
            setSearchbar('')
            onClose()
        }
    }
    const handleClick = () => {
        if (searchbar != '') {
            history(`/recipes/search/${searchbar}`)
            setSearchbar('')
            onClose()
        }
    }
    return(
        <InputGroup>
            <InputRightElement
                children={<Button onClick={handleClick} w ='100%' borderRadius='15px' fontSize='1em' justifyContent='center'><SearchIcon/></Button>}
            />
            <Input 
                w ='100%'  placeholder='Search a recipe' borderRadius='15px' pr='50px' value = {searchbar} 
                onChange = {(event) => setSearchbar(event.target.value)} onKeyPress={handleKeyPress}
            />
           
        </InputGroup > 
    )
}

export default Searchbar