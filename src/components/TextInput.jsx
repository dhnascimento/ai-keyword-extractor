import { useState } from "react";
import { Textarea, Button, useToast } from "@chakra-ui/react";

export default function TextInput() {
    const [text, setText] = useState();

    const handleTextInput = (e) => {
        setText(e.target.value);
    }

    return (
        <>
            <Textarea
                bg='blue.400'
                color='white'
                p={4}
                mt={6}
                h={200}
                value={text}
                onChange={handleTextInput}
            />
            <Button
                bg='blue.500'
                color='white'
                mt={4}
                w='100%'
                _hover={{ bg: 'blue.700' }}
                onClick
            >
                Extract Keywords
            </Button>
        </>
    );
}