import { Box, Heading, Text, VStack, Link, HStack } from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Publication = ({ title, authors, conference, year, link }) => (
  <Box
    p={6}
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="lg"
    _hover={{ bg: 'gray.50' }}
    transition="all 0.2s"
  >
    <VStack align="start" spacing={2}>
      <Heading as="h3" size="md" fontFamily="'Poppins', sans-serif">
        {title}
      </Heading>
      <Text color="gray.700" fontSize="md">
        {authors}
      </Text>
      <Text color="gray.600" fontSize="md" fontStyle="italic">
        {conference} • {year}
      </Text>
      {link && (
        <Link href={link} isExternal color="blue.500">
          <HStack spacing={2}>
            <Text>View Paper</Text>
            <FaExternalLinkAlt size="12px" />
          </HStack>
        </Link>
      )}
    </VStack>
  </Box>
);

const Publications = () => {
  const journalPublications = [
    {
      title: "More than Just Statistical Recurrence: Human and Machine Unsupervised Learning of Māori Word Segmentation across Morphological Processes",
      authors: "Varatharaj, A., Todd, S.",
      conference: "Proceedings of the 21st SIGMORPHON Workshop on Computational Research in Phonetics, Phonology, and Morphology",
      year: "2024",
      pages: "20-31"
    },
    {
      title: "Children As Evaluators: Understanding Emotion Language Acquisition",
      authors: "Varatharaj, A., Read, J., Horton, M., Lochrie, M., Brehm, L.",
      conference: "Proceedings of the 23rd Annual ACM Interaction Design and Children Conference",
      year: "2024"
    },
    {
      title: "Teaching Linguistic Justice through Augmented Reality",
      authors: "Varatharaj, A., Welch, A., Bucholtz, M., Lee, J. S.",
      conference: "AR for Social Justice Workshop, Conference on Human Factors in Computing Systems (CHI)",
      year: "2024"
    },
    {
      title: "Supporting Teacher Assessment in Chinese Language Learning Using Textual and Tonal Features",
      authors: "Varatharaj, A., Botelho, A. F., Lu, X., Heffernan, N. T.",
      conference: "International Conference on Artificial Intelligence in Education",
      year: "2020",
      pages: "562-573"
    },
    {
      title: "Developing early detectors of student attrition and wheel spinning using deep learning",
      authors: "Botelho, A. F., Varatharaj, A., Patikorn, T., Doherty, D., Adjei, S. A., Beck, J. E.",
      conference: "IEEE Transactions on Learning Technologies",
      year: "2019",
      pages: "12(2), 158-170"
    }
  ];

  const bookChapters = [
    {
      title: "A multi-generational analysis of heritage language complexity",
      authors: "Varatharaj, A., Scontras, G., Nagy, N.",
      conference: "In M. Polinsky and M. T. Putnam (eds.), Formal approaches to complexity in heritage languages",
      year: "2024",
      pages: "133-152"
    }
  ];

  const talks = [
    {
      title: "Investigating Child-Parent Emotional Discourse and Emotion Recognition Through Interactive Experiments",
      authors: "Varatharaj, A., Brehm, L.",
      conference: "International Society for Research on Emotion (ISRE) Conference",
      year: "2024",
      type: "Full conference talk"
    },
    {
      title: "Emotion Language Acquisition in Children: An Exploratory Case Study on the Word 'Good'",
      authors: "Varatharaj, A., Brehm, L.",
      conference: "6th CAlifornia Meeting on Psycholinguistics (CAMP6)",
      year: "2024",
      type: "Poster"
    },
    {
      title: "How do we learn to talk about our emotions?",
      authors: "Varatharaj, A., Brehm, L.",
      conference: "14th California Cognitive Science Conference (CCSC)",
      year: "2023",
      type: "Poster"
    }
  ];

  return (
    <VStack spacing={12} align="flex-start" pt={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6} fontFamily="'Poppins', sans-serif">
          Publications
        </Heading>
        <Text fontSize="lg" color="gray.700" lineHeight="tall" maxW="800px">
          My research work in computational linguistics, language acquisition, and human-computer interaction.
        </Text>
      </Box>

      <Box width="100%">
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Journal and Conference Papers
        </Heading>
        <VStack spacing={4} align="stretch">
          {journalPublications.map((pub, index) => (
            <Publication key={index} {...pub} />
          ))}
        </VStack>
      </Box>

      <Box width="100%">
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Book Chapters
        </Heading>
        <VStack spacing={4} align="stretch">
          {bookChapters.map((pub, index) => (
            <Publication key={index} {...pub} />
          ))}
        </VStack>
      </Box>

      <Box width="100%">
        <Heading as="h2" size="lg" mb={4} fontFamily="'Poppins', sans-serif">
          Conference Talks & Posters
        </Heading>
        <VStack spacing={4} align="stretch">
          {talks.map((pub, index) => (
            <Publication key={index} {...pub} />
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Publications;
