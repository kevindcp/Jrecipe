import {
    Text,
    Image,
    LinkOverlay,
    LinkBox,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({name, image, link}) =>{
    const history= useNavigate()
    return (
            <LinkBox h='auto' borderWidth='1px' rounded='md'>
                <LinkOverlay onClick = {() => history(link)} cursor='pointer'>
                    <Image 
                        src={image} 
                        fallbackSrc={'../assets/images/defaultImage.png'} 
                        w='100%' h='25vh' 
                        rounded='md' 
                    />
                </LinkOverlay>
                <Text 
                        position='relative' 
                        fontSize='2em' 
                        top='-55%' 
                        align='center' 
                        color='white' 
                        fontWeight='800' 
                        backgroundColor='black'
                        textShadow='2px 3px black'
                        h='0'
                >
                        {name}
                </Text>
            </LinkBox>
    )
}

export default CategoryCard