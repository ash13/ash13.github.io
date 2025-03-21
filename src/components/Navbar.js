import { Box, Flex, Link, Stack } from '@chakra-ui/react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const NavLink = ({ to, children }) => (
    <Link
      as={RouterLink}
      to={to}
      fontSize="lg"
      fontWeight={isActive(to) ? "600" : "400"}
      color={isActive(to) ? "blue.500" : "gray.700"}
      _hover={{ color: 'blue.500', textDecoration: 'none' }}
      position="relative"
      _after={isActive(to) ? {
        content: '""',
        position: 'absolute',
        bottom: '-2px',
        left: '0',
        width: '100%',
        height: '2px',
        bg: 'blue.500',
      } : {}}
    >
      {children}
    </Link>
  );

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

        <Stack direction="row" spacing={8}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/awards">Awards & Teaching</NavLink>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Navbar;
