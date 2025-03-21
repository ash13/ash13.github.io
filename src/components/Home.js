import { Box, Heading, Text, VStack, HStack, Link, Image, Flex, Button } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Home = () => {
  return (
    <VStack spacing={12} align="flex-start" pt={16}>
      <Flex
        direction={{ base: 'column-reverse', md: 'row' }}
        gap={8}
        width="100%"
        align={{ base: 'center', md: 'start' }}
      >
        <Box flex={1}>
          <Heading as="h1" size="2xl" mb={6} fontFamily="'Poppins', sans-serif">
            Hi, I'm Ashvini Varatharaj
          </Heading>
          <Text fontSize="xl" color="gray.700" lineHeight="tall" mb={6}>
            I'm a PhD student in Linguistics at the University of California, Santa Barbara, focusing on
            Computational Linguistics. My research interests span across language acquisition, computational
            psycholinguistics, and heritage language complexity.
          </Text>
          <Link href="/Academic_CV_AshviniV.pdf" isExternal _hover={{ textDecoration: 'none' }}>
            <Button
              leftIcon={<FaFileAlt />}
              colorScheme="primary"
              variant="outline"
              size="lg"
              _hover={{
                bg: 'primary.50',
                transform: 'translateY(-2px)',
                boxShadow: 'md'
              }}
              transition="all 0.2s"
            >
              Download CV
            </Button>
          </Link>
        </Box>
        <Box
          position="relative"
          minW={{ base: '280px', md: '300px' }}
          maxW={{ base: '280px', md: '300px' }}
          height={{ base: '280px', md: '300px' }}
          borderRadius="full"
          overflow="hidden"
          boxShadow="lg"
          border="3px solid"
          borderColor="primary.100"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.02)',
            borderColor: 'primary.200',
            boxShadow: 'xl'
          }}
        >
          <Image
            src="/images/profile.jpeg"
            alt="Ashvini Varatharaj"
            width="100%"
            height="100%"
            objectFit="cover"
            fallback={<Box bg="gray.100" width="100%" height="100%" borderRadius="full" />}
          />
        </Box>
      </Flex>

      <Box>
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Education
        </Heading>
        <VStack align="start" spacing={4}>
          <Box>
            <Text fontSize="lg" fontWeight="500" color="gray.800">
              Ph.D. in Linguistics (Computational Linguistics)
            </Text>
            <Text fontSize="md" color="gray.600">
              University of California, Santa Barbara • 2021 - 2026
            </Text>
            <Text fontSize="md" color="gray.600">
              Advisors: Dr. Simon Todd, Dr. Laurel Brehm • GPA: 4.0
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="500" color="gray.800">
              M.S. in Computer Science
            </Text>
            <Text fontSize="md" color="gray.600">
              Worcester Polytechnic Institute • 2018 - 2020
            </Text>
            <Text fontSize="md" color="gray.600">
              Advisor: Dr. Neil Heffernan • GPA: 4.0
            </Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="500" color="gray.800">
              B.E. in Information Science and Engineering
            </Text>
            <Text fontSize="md" color="gray.600">
              BMS College of Engineering • 2011 - 2015
            </Text>
            <Text fontSize="md" color="gray.600">
              GPA: 9.44/10
            </Text>
          </Box>
        </VStack>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Contact
        </Heading>
        <Flex
          gap={6}
          flexWrap="wrap"
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
        >
          <Link 
            href="mailto:ashvinivaratharaj@ucsb.edu" 
            color="gray.600" 
            fontSize="lg"
            _hover={{ 
              color: 'primary.500',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={2}>
              <FaEnvelope />
              <Text>Email</Text>
            </HStack>
          </Link>
          <Link 
            href="https://github.com/ash13" 
            isExternal 
            color="gray.600" 
            fontSize="lg"
            _hover={{ 
              color: 'primary.500',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={2}>
              <FaGithub />
              <Text>GitHub</Text>
            </HStack>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/ashvini-varatharaj-2621a79b" 
            isExternal 
            color="gray.600" 
            fontSize="lg"
            _hover={{ 
              color: 'primary.500',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={2}>
              <FaLinkedin />
              <Text>LinkedIn</Text>
            </HStack>
          </Link>
          <Link 
            href="https://scholar.google.com/citations?user=yyTSKksAAAAJ&hl=en&oi=ao" 
            isExternal 
            color="gray.600" 
            fontSize="lg"
            _hover={{ 
              color: 'primary.500',
              transform: 'translateY(-2px)',
            }}
            transition="all 0.2s"
          >
            <HStack spacing={2}>
              <SiGooglescholar />
              <Text>Scholar</Text>
            </HStack>
          </Link>
        </Flex>
      </Box>
    </VStack>
  );
};

export default Home;
