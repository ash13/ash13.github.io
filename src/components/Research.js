import { Box, Heading, Text, VStack, SimpleGrid, Image } from '@chakra-ui/react';

const ResearchProject = ({ title, description, image }) => (
  <Box
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="lg"
    overflow="hidden"
    transition="all 0.2s"
    _hover={{ transform: 'translateY(-4px)', shadow: 'md' }}
  >
    {image && (
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        height="200px"
        width="100%"
      />
    )}
    <Box p={6}>
      <Heading as="h3" size="md" mb={3} fontFamily="'Poppins', sans-serif">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="md" lineHeight="tall">
        {description}
      </Text>
    </Box>
  </Box>
);

const Research = () => {
  const labs = [
    {
      title: "Child Computer Interaction Lab (ChiCI)",
      description: "Collaborating with Dr. Janet Read, Dr. Matthew Horton, and Dr. Mark Lochrie on cross-cultural differences in the 'Children as evaluators' project.",
      location: "University of Central Lancashire",
      period: "2023-Present"
    },
    {
      title: "Computational Psycholinguistics For Listening And Speaking (CPLS)",
      description: "Working with Dr. Simon Todd on MA thesis exploring the extent of statistical learning used by implicit language learners in Māori.",
      location: "UC Santa Barbara",
      period: "2021-Present"
    },
    {
      title: "Producing and Perceiving Language (PRPL) lab",
      description: "Conducting research with Dr. Laurel Brehm, including interviewing children and parents at the MOXI museum for emotion labeling tasks.",
      location: "UC Santa Barbara",
      period: "2022-Present"
    },
    {
      title: "The Meaning Lab",
      description: "Collaborated with Dr. Gregory Scontras on analyzing language change in heritage languages using information theoretic metrics, extending work into social media data.",
      location: "UC Irvine",
      period: "2020-2022"
    }
  ];

  return (
    <VStack spacing={12} align="flex-start" pt={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6} fontFamily="'Poppins', sans-serif">
          Research
        </Heading>
        <Text fontSize="lg" color="gray.700" lineHeight="tall" maxW="800px">
          My research focuses on computational linguistics, language acquisition, and human-computer interaction.
          I work at the intersection of linguistics and computer science, using computational methods to understand
          language learning, processing, and complexity.
        </Text>
      </Box>

      <Box w="100%">
        <Heading as="h2" size="lg" mb={6} fontFamily="'Poppins', sans-serif">
          Research Labs
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
          {labs.map((lab, index) => (
            <ResearchProject
              key={index}
              title={lab.title}
              description={
                <>
                  <Text mb={2} fontWeight="500" color="gray.600">{lab.location} • {lab.period}</Text>
                  <Text>{lab.description}</Text>
                </>
              }
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Research Interests
        </Heading>
        <VStack align="start" spacing={3}>
          <Text fontSize="lg" color="gray.700">• Computational Linguistics</Text>
          <Text fontSize="lg" color="gray.700">• Language Acquisition</Text>
          <Text fontSize="lg" color="gray.700">• Heritage Language Complexity</Text>
          <Text fontSize="lg" color="gray.700">• Human-Computer Interaction</Text>
          <Text fontSize="lg" color="gray.700">• Educational Technology</Text>
        </VStack>
      </Box>
    </VStack>
  );
};

export default Research;
