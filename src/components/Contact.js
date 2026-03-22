import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
  useColorModeValue,
  HStack,
  Link,
  Icon,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const toast = useToast();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    toast({
      title: 'Message sent!',
      description: "Thanks for reaching out. I'll get back to you soon!",
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const socialLinks = [
    {
      label: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/yourusername',
    },
    {
      label: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/yourusername',
    },
    {
      label: 'Twitter',
      icon: FaTwitter,
      url: 'https://twitter.com/yourusername',
    },
  ];

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Get in Touch
          </Heading>
          <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
            Have a question or want to work together? Feel free to reach out!
          </Text>
        </Box>

        <Box
          as="form"
          onSubmit={handleSubmit}
          w="100%"
          p={8}
          bg={bgColor}
          borderRadius="lg"
          borderWidth="1px"
          borderColor={borderColor}
          shadow="md"
        >
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="Your name" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="your.email@example.com" />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Your message"
                rows={6}
                resize="vertical"
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
            >
              Send Message
            </Button>
          </VStack>
        </Box>

        <Box w="100%" mt={8}>
          <Heading as="h2" size="md" mb={4}>
            Connect with Me
          </Heading>
          <HStack spacing={4}>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.url}
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                <Button
                  leftIcon={<Icon as={social.icon} />}
                  variant="outline"
                  size="lg"
                >
                  {social.label}
                </Button>
              </Link>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
