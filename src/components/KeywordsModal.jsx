import {
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    CircularProgress
} from "@chakra-ui/react";

export default function KeywordsModal({ keywords, loading, isOpen, closeModal }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Keywords
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody d='flex' align='center' justify='center'>
                        {loading ? (<CircularProgress isIndeterminate color='blue.300' />)
                            : (
                                <Text>
                                    {keywords}
                                </Text>
                            )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={closeModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
