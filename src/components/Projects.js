import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Link,
  VStack,
  Tag,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, technologies, github, demo }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const githubColor = useColorModeValue('blue.500', 'blue.300');
  const demoColor = useColorModeValue('green.500', 'green.300');

  return (
    <Box
      p={6}
      bg={bgColor}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={borderColor}
      shadow="md"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'lg',
      }}
    >
      <VStack align="start" spacing={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        
        <Text color={textColor}>
          {description}
        </Text>

        <Box>
          {technologies.map((tech, index) => (
            <Tag
              key={index}
              mr={2}
              mb={2}
              colorScheme="blue"
              variant="subtle"
            >
              {tech}
            </Tag>
          ))}
        </Box>

        <HStack spacing={4}>
          {github && (
            <Link
              href={github}
              isExternal
              color={githubColor}
              display="flex"
              alignItems="center"
            >
              <FaGithub style={{ marginRight: '0.5rem' }} />
              GitHub
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              isExternal
              color={demoColor}
              display="flex"
              alignItems="center"
            >
              <FaExternalLinkAlt style={{ marginRight: '0.5rem' }} />
              Live Demo
            </Link>
          )}
        </HStack>
      </VStack>
    </Box>
  );
};

const Projects = () => {
  // Example projects - replace with your own
  const projects = [
    {
      title: 'Project One',
      description:
        'A brief description of your first project. What problem did it solve? What technologies did you use?',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/project-one',
      demo: 'https://project-one.demo',
    },
    {
      title: 'Project Two',
      description:
        'Description of your second project. Highlight the key features and your role in development.',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      github: 'https://github.com/yourusername/project-two',
      demo: 'https://project-two.demo',
    },
    {
      title: 'Project Three',
      description:
        'Overview of your third project. What makes this project unique? What did you learn?',
      technologies: ['Vue.js', 'Express', 'Firebase'],
      github: 'https://github.com/yourusername/project-three',
    },
    // Add more projects as needed
  ];

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Box>
          <Heading as="h1" size="xl" mb={4}>
            Projects
          </Heading>
          <Text
            fontSize="lg"
            color={useColorModeValue('gray.600', 'gray.300')}
            maxW="container.md"
          >
            Here are some of the projects I've worked on. Each one represents
            a unique challenge and learning experience.
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="100%">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Projects;
