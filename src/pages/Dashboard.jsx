import React from 'react';
import { ChakraProvider, Box, Flex, Text, VStack, HStack, IconButton, useDisclosure } from '@chakra-ui/react';
import { FiMenu, FiHome, FiUser, FiSettings } from 'react-icons/fi';

function Sidebar({ isOpen, onClose }) {
  return (
    <Box
      position="fixed"
      left="0"
      top="0"
      h="100vh"
      w="250px"
      bg="teal.500"
      color="white"
      p={4}
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    >
      <VStack align="flex-start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold" mb={6}>
          Dashboard
        </Text>
        <HStack>
          <FiHome />
          <Text>Home</Text>
        </HStack>
        <HStack>
          <FiUser />
          <Text>Profile</Text>
        </HStack>
        <HStack>
          <FiSettings />
          <Text>Settings</Text>
        </HStack>
      </VStack>
    </Box>
  );
}

function Header({ onOpen }) {
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      left="0"
      right="0"
      bg="white"
      boxShadow="md"
      zIndex="1"
      px={4}
      py={2}
      justify="space-between"
      align="center"
    >
      <IconButton
        aria-label="Open Menu"
        icon={<FiMenu />}
        onClick={onOpen}
        display={{ base: 'inline-flex', md: 'none' }}
      />
      <Text fontSize="lg" fontWeight="bold">
        Dashboard
      </Text>
    </Flex>
  );
}

function MainContent() {
  return (
    <Box ml={{ base: 0, md: '250px' }} pt="60px" p={6}>
      <Text fontSize="3xl" fontWeight="bold" mb={4}>
        Welcome to the Dashboard
      </Text>
      <Text>This is your main content area.</Text>
    </Box>
  );
}

export default function Dashboard() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Header onOpen={onOpen} />
      <Sidebar isOpen={isOpen} onClose={onClose} />
      <MainContent />
    </ChakraProvider>
  );
}
