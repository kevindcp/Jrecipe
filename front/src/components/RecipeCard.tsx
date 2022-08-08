import {
    Text,
    Image,
    Heading,
    LinkOverlay,
    Badge,
    LinkBox,
} from '@chakra-ui/react';
import { FC } from 'react';
import { RecipeCardContent } from '../types/recipes';
import { useNavigate } from 'react-router-dom'

const RecipeCard: FC<RecipeCardContent> = ({title, cookTime, prepTime, category, image, link}) =>{
    const history= useNavigate()
    return (
        <LinkBox p='1' borderWidth='3px' rounded='md' h='auto'>
            <Image 
                src={image} 
                fallbackSrc={'https://th.bing.com/th/id/OIP.fmZmfnpyXOpq_Ir4ofnWUQHaHa?pid=ImgDet&rs=1'} 
                w='100%' h='25vh' 
                maxH='300px'
                rounded='md'
            />
            <Heading size='1.5em' my='2'>
                <LinkOverlay onClick = {() => history(link)} cursor='pointer' >
                    {title}
                </LinkOverlay>
            </Heading>
            <Badge>
                {category}
            </Badge>
            <Text fontSize='1em' align='center' fontWeight='600' size='md'>
                Time: {prepTime + cookTime} min
            </Text>
        </LinkBox>
    )
}

export default RecipeCard