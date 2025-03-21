import React from 'react';
import { Box, Heading, Text, VStack, HStack, Link, Image, Flex, Button } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const MotionBox = motion(Box);

const TimelineItem = ({ year, title, subtitle, details }) => {
  const ref = React.useRef();
  const isInView = useInView(ref, {
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <MotionBox
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
      position="relative"
      paddingLeft="6"
      _before={{
        content: '""',
        position: 'absolute',
        left: '-5px',
        top: '0',
        width: '12px',
        height: '12px',
        borderRadius: 'full',
        bg: 'blue.500',
        zIndex: 1
      }}
    >
      <Text fontSize="sm" fontWeight="600" color="blue.500" mb={1}>
        {year}
      </Text>
      <Text fontSize="lg" fontWeight="600" color="gray.800" mb={1}>
        {title}
      </Text>
      <Text fontSize="md" color="gray.600" mb={2}>
        {subtitle}
      </Text>
      <VStack align="start" spacing={1} pl={4} borderLeft="2px" borderColor="gray.100">
        {details.map((detail, index) => (
          <Text key={index} fontSize="sm" color="gray.600">
            {detail}
          </Text>
        ))}
      </VStack>
    </MotionBox>
  );
};

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
          borderColor="white"
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.02)',
            borderColor: 'white',
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
        <Heading as="h2" size="lg" mb={6} fontFamily="'Poppins', sans-serif">
          Education & Experience
        </Heading>
        <Box position="relative" pl={10}>
          <Box
            position="absolute"
            left="0"
            top="0"
            bottom="0"
            width="2px"
            bg="blue.100"
            zIndex={0}
          />
          <VStack spacing={12} align="start">
            <TimelineItem
              year="2021 - Present"
              title="Ph.D. in Linguistics (Computational Linguistics)"
              subtitle="University of California, Santa Barbara"
              details={[
                'Research focus on Computational Linguistics and Language Acquisition',
                'Member of CPLS (Computational Psycholinguistics For Listening And Speaking) lab',
                'Member of PRPL (Producing and Perceiving Language) lab',
                'Research in heritage language complexity'
              ]}
            />

            <TimelineItem
              year="2020 - 2021"
              title="Research Assistant"
              subtitle="The Meaning Lab, UC Irvine"
              details={[
                'Conducted research in computational linguistics',
                'Contributed to psycholinguistics research',
                'Collaborated on language processing studies'
              ]}
            />

            <TimelineItem
              year="2018 - 2020"
              title="M.S. in Computer Science"
              subtitle="Worcester Polytechnic Institute"
              details={[
                'Research in Human-Computer Interaction',
                'Focus on Educational Technology',
                'Collaboration with Child Computer Interaction Lab (ChiCI) at UCLan'
              ]}
            />

            <TimelineItem
              year="2011 - 2015"
              title="B.E. in Information Science and Engineering"
              subtitle="BMS College of Engineering"
              details={[
                'Focus on computer science fundamentals',
                'Specialized in information systems',
                'Software development and engineering principles'
              ]}
            />
          </VStack>
        </Box>
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
