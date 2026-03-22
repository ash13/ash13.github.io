import { Box, Flex, Link, Stack, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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

  const MenuLink = ({ to, children }) => (
    <MenuItem
      as={RouterLink}
      to={to}
      color={isActive(to) ? "blue.500" : "gray.700"}
      fontWeight={isActive(to) ? "600" : "400"}
    >
      {children}
    </MenuItem>
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

        <Stack direction="row" spacing={8} display={{ base: 'none', md: 'flex' }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/publications">Publications</NavLink>
          <NavLink to="/awards">Awards & Teaching</NavLink>
        </Stack>

        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Navigation Menu"
              icon={<HamburgerIcon boxSize={6} />}
              variant="ghost"
              color="gray.700"
              _hover={{ color: 'blue.500' }}
              _active={{ color: 'blue.600' }}
            />
            <MenuList>
              <MenuLink to="/">Home</MenuLink>
              <MenuLink to="/research">Research</MenuLink>
              <MenuLink to="/publications">Publications</MenuLink>
              <MenuLink to="/awards">Awards & Teaching</MenuLink>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
