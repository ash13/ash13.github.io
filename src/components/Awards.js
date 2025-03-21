import { Box, Heading, Text, VStack, SimpleGrid } from '@chakra-ui/react';

const AwardCard = ({ title, description, year }) => (
  <Box
    p={6}
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="lg"
    _hover={{ bg: 'gray.50' }}
    transition="all 0.2s"
  >
    <VStack align="start" spacing={2}>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text color="gray.600" fontSize="md">
        {year}
      </Text>
      <Text color="gray.700" fontSize="md">
        {description}
      </Text>
    </VStack>
  </Box>
);

const TeachingCard = ({ course, role, semester, description }) => (
  <Box
    p={6}
    borderWidth="1px"
    borderColor="gray.200"
    borderRadius="lg"
    _hover={{ bg: 'gray.50' }}
    transition="all 0.2s"
  >
    <VStack align="start" spacing={2}>
      <Heading as="h3" size="md">
        {course}
      </Heading>
      <Text color="primary.600" fontSize="md" fontWeight="500">
        {role}
      </Text>
      <Text color="gray.600" fontSize="md">
        {semester}
      </Text>
      {description && (
        <Text color="gray.700" fontSize="md">
          {description}
        </Text>
      )}
    </VStack>
  </Box>
);

const Awards = () => {
  const awards = [
    {
      title: "Regents Fellowship",
      year: "2021",
      description: "Five years of funding from University of California, Santa Barbara"
    },
    {
      title: "Graduate Research and Innovation Exchange Finalist (GRIE)",
      year: "2020",
      description: "Worcester Polytechnic Institute"
    },
    {
      title: "IBM Research Challenge Winner",
      year: "2020",
      description: "TechTogether Hackathon"
    },
    {
      title: "JP Morgan Financial Hack Winner",
      year: "2019",
      description: "SheHacks Boston Hackathon"
    },
    {
      title: "Mental Health Mini-grant",
      year: "2022",
      description: "University of California, Santa Barbara"
    }
  ];

  const teaching = [
    {
      course: "Programming for Linguists",
      role: "Teaching Assistant",
      semester: "Fall 2024",
      institution: "UCSB"
    },
    {
      course: "SKILLS (School Kids Investigating Language, Life and Society)",
      role: "Instructor of Record",
      semester: "Winter 2024",
      institution: "UCSB"
    },
    {
      course: "Language in Life",
      role: "Teaching Assistant",
      semester: "Spring 2023",
      institution: "UCSB"
    },
    {
      course: "Introduction to First Language Acquisition",
      role: "Teaching Assistant",
      semester: "Winter 2023",
      institution: "UCSB"
    },
    {
      course: "Programming for Linguists",
      role: "Teaching Assistant",
      semester: "Fall 2022",
      institution: "UCSB"
    }
  ];

  const service = [
    {
      title: "Responsible Tech University Network Board of Director",
      organization: "All Tech is Human",
      period: "2024-Present"
    },
    {
      title: "Speaker for Women in STEM series",
      organization: "Girls Inc. of Carpinteria",
      period: "Spring 2022"
    },
    {
      title: "Instructor (Python)",
      organization: "Talent Quest for India",
      period: "Fall 2020"
    },
    {
      title: "Volunteer",
      organization: "Girls who code club at WPI",
      period: "Spring 2020"
    },
    {
      title: "Mentor",
      organization: "Women in Research and Mentorship Program, Pre-collegiate Outreach Program",
      period: "Fall 2019"
    }
  ];

  return (
    <VStack spacing={12} align="flex-start" pt={8}>
      <Box>
        <Heading as="h1" size="xl" mb={6}>
          Awards & Honors
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
          {awards.map((award, index) => (
            <AwardCard key={index} {...award} />
          ))}
        </SimpleGrid>
      </Box>

      <Box width="100%">
        <Heading as="h2" size="xl" mb={6}>
          Teaching Experience
        </Heading>
        <VStack spacing={6} align="stretch">
          {teaching.map((course, index) => (
            <TeachingCard key={index} {...course} />
          ))}
        </VStack>
      </Box>

      <Box width="100%">
        <Heading as="h2" size="xl" mb={6}>
          Service & Outreach
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} width="100%">
          {service.map((item, index) => (
            <AwardCard
              key={index}
              title={item.title}
              description={item.organization}
              year={item.period}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

export default Awards;
