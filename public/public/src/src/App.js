import React from 'react';
import { ChakraProvider, Box, Text, Heading, Container } from '@chakra-ui/react';
import AssessmentComponent from './AssessmentComponent';
function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="2xl" mb={6}>FranchiseAI</Heading>
        <Text mb={8}>
          Transform your business with AI-powered franchise strategies. Deploy proven 
          franchise-type business models across sales, marketing, operations, and more.
        </Text>
        <Box>
          <AssessmentComponent />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;
