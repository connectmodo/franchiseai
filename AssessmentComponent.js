import React from 'react';
import { Box, Button, Card, Container, Heading, Stack, Text } from '@chakra-ui/react';

const AssessmentComponent = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Card p={6} boxShadow="lg" borderRadius="lg">
        <Stack spacing={6}>
          <Heading size="lg" textAlign="center">Business Assessment Tool</Heading>
          
          <Box>
            <Heading size="md" mb={4}>
              Welcome to the FranchiseAI Assessment
            </Heading>
            <Text mb={4}>
              This assessment will help identify areas where your business can improve
              to reach franchise-level standardization and efficiency.
            </Text>
            <Text mb={4}>
              You'll receive personalized AI recommendations based on your responses.
            </Text>
          </Box>
          
          <Button colorScheme="blue" size="lg">
            Start Assessment
          </Button>
        </Stack>
      </Card>
    </Container>
  );
};

export default AssessmentComponent;
