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
import { FC, useEffect } from "react"

const CustomModal: FC <any> = ({leftIcon, w, bc, focus, text, content, h, mt, mb, fontSize, justifyContent, header}) => {
    const { isOpen, onClose, onOpen } = useDisclosure()
    return (
        <>
        <Button w={w} leftIcon={leftIcon} backgroundColor={bc} _focus={focus} h={h} mt={mt} mb={mb} fontSize={fontSize} justifyContent={justifyContent} onClick={()=>onOpen()}>{text}</Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader hidden={header?false:true}>{header}</ModalHeader>
            <ModalCloseButton hidden={header?false:true} />
            <ModalBody p={header?6:0} w='auto' >
              {content}
            </ModalBody>
          </ModalContent>
        </Modal>
        </>
    )
  }

export default CustomModal