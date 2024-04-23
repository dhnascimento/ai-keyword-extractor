import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from '../assets/openai.png';

export default function Footer() {
    return (
        <Box mt={50}>
            <Flex justify='center'>
                <Image src={logo} mr={1} />
                <Text>
                    Powered By Open AI
                </Text>
            </Flex>
        </Box>
    );
}