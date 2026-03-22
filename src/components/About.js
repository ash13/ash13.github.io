import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

const SkillCategory = ({ title, skills }) => (
  <Box>
    <Heading as="h3" size="md" mb={4}>
      {title}
    </Heading>
    <Box>
      {skills.map((skill, index) => (
        <Tag
          key={index}
          mr={2}
          mb={2}
          size="lg"
          variant="subtle"
          colorScheme="blue"
        >
          {skill}
        </Tag>
      ))}
    </Box>
  </Box>
);

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  const skills = {
    technical: [
      'JavaScript',
      'React',
      'Node.js',
      'Python',
      'HTML/CSS',
      'Git',
    ],
    tools: [
      'VS Code',
      'GitHub',
      'Docker',
      'AWS',
      'Figma',
    ],
    soft: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Project Management',
    ],
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            I'm a [your role] passionate about [your interests]. With [X] years
            of experience in software development, I focus on creating impactful
            solutions that make a difference. I enjoy tackling complex problems
            and turning them into simple, elegant solutions.
          </Text>
        </Box>

        <Box w="100%" bg={bgColor} p={8} borderRadius="lg" shadow="md">
          <Heading as="h2" size="lg" mb={6}>
            Skills & Expertise
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            <SkillCategory title="Technical Skills" skills={skills.technical} />
            <SkillCategory title="Tools & Platforms" skills={skills.tools} />
            <SkillCategory title="Soft Skills" skills={skills.soft} />
          </SimpleGrid>
        </Box>

        <Box w="100%" bg={bgColor} p={8} borderRadius="lg" shadow="md">
          <Heading as="h2" size="lg" mb={6}>
            Education
          </Heading>
          <VStack align="start" spacing={4}>
            <Box>
              <Heading as="h3" size="md">
                [Your Degree]
              </Heading>
              <Text color={textColor} fontSize="lg">
                [University Name] • [Graduation Year]
              </Text>
              <Text color={textColor} mt={2}>
                [Brief description of your studies and achievements]
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box w="100%" bg={bgColor} p={8} borderRadius="lg" shadow="md">
          <Heading as="h2" size="lg" mb={6}>
            Experience
          </Heading>
          <VStack align="start" spacing={6}>
            <Box>
              <Heading as="h3" size="md">
                [Job Title]
              </Heading>
              <Text color={textColor} fontSize="lg">
                [Company Name] • [Date Range]
              </Text>
              <Text color={textColor} mt={2}>
                [Brief description of your role and key achievements]
              </Text>
            </Box>
            {/* Add more experience items as needed */}
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default About;
