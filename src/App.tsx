import './App.css';
import { Box } from '@chakra-ui/react';
import { MyForm } from './MyForm';

function App() {
  return (
    <Box className="App" w="full" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <MyForm />
    </Box>
  );
}

export default App;
