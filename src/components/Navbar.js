import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box py={6} borderBottom="1px" borderColor="gray.100">
      <Flex maxW="1000px" mx="auto" px={6} justify="space-between" align="center">
        <Link
          as={RouterLink}
          to="/"
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _hover={{ textDecoration: 'none' }}
          fontFamily="'Poppins', sans-serif"
        >
          Ashvini Varatharaj
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
