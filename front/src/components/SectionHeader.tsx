import {
    Text,
    Image,
    Box,
    Heading,
} from '@chakra-ui/react';
import { FC } from 'react';
import { SectionContent } from '../types/section';

const SectionHeader: FC<SectionContent> = ({name}) =>{
    return (
                <Heading
                    alignSelf='left'
                    justifySelf= 'left'
                    mt='7vh' mb='5vh'
                    fontSize='4vh' 
                    border = '1px black'
                    w = '83vw' 
                >
                        {name}
                </Heading>
    )
}

export default SectionHeader