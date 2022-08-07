import { 
    AlertDialog,
    Button,
    AlertDialogOverlay,
    AlertDialogBody,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogFooter
} from "@chakra-ui/react"
import { FC, useRef } from "react"
import { AlertProps } from "../types/menu"

const AlertPopup: FC <AlertProps> = ({isOpen, setIsOpen, content, handleDelete}) => {
    const onClose = () => setIsOpen(false)
    const cancelRef = useRef(null)

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isCentered
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="1.5em" fontWeight="bold">
                        {content}
                    </AlertDialogHeader>
                    <AlertDialogBody fontSize='1em'>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>

                    <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" onClick={handleDelete} ml={3}>
                        Delete
                    </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    )
}

export default AlertPopup