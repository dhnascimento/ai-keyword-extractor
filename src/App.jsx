import { useState } from 'react'
import { Container, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Footer from './components/Footer';
import TextInput from './components/TextInput';
import KeywordsModal from './components/KeywordsModal';

function App() {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true);
    setIsOpen(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama3',
        prompt: 'Extract keywords from this text. Make the first letter of each word uppercase and separate with commas.\n\n' + text + '',
        stream: false
      })
    }

    const response = await fetch(import.meta.env.VITE_OLLAMA_API_URL, options);

    const json = await response.json();
    const data = json.response.trim();

    setKeywords(data);
    setLoading(false);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Box bg='blue.600' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  );
}

export default App
