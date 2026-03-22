import { ChakraProvider, Box, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

const theme = extendTheme({
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },
  colors: {
    primary: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box minH="100vh" bg="white">
          <Navbar />
          <Box maxW="1000px" mx="auto" px={6} py={12}>
            <Home />
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
