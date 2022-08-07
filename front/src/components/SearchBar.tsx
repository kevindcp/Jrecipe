
import { 
    InputGroup,
    InputLeftElement,
    Input
 } from "@chakra-ui/react"
import { SearchIcon } from "@chakra-ui/icons"
import { useState, FC } from "react"
import { useNavigate } from 'react-router-dom'

const Searchbar: FC <any> = ({ onClose }) => {
    const [searchbar, setSearchbar] = useState('')
    const history = useNavigate()
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.code === 'Enter') {
            console.log(searchbar)
            setSearchbar('')
            history(`/recipes/search/${searchbar}`)
            onClose()
        }
    }
    return(
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<SearchIcon />}
            />
            <Input w ='100%'  placeholder='Search a recipe' borderRadius='15px' pr='50px' value = {searchbar} onChange = {(event) => setSearchbar(event.target.value)} onKeyPress={handleKeyPress}/>
        </InputGroup > 
    )
}

export default Searchbar