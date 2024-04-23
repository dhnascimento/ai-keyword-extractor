import { Heading, Image, Text } from "@chakra-ui/react";
import logo from '../assets/light-bulb.svg';

export default function Header() {
    return (
        <>
            <Image src={logo} alt='logo' w={100} mb='1rem' />
            <Heading color='white' mb='1rem'>
                AI Keyword Extractor
            </Heading>
            <Text fontSize={25} textAlign='center'>
                Paste in your text below and we'll extract the keywords for you
            </Text>
        </>
    );
}